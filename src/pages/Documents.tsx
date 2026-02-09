import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

/**
 * Documents Page - Replicates rodwell.house/documents PHP logic in React
 * 
 * PHP Structure:
 * - getBearerToken() -> gets access token
 * - getListOfFolders() -> gets folder list
 * - getListOfFiles() -> gets files for each folder
 * - downloadURL() -> JavaScript function to download files
 * - Accordion with h3 + div structure
 */

interface FileItem {
  name: string;
  serverRelativeUrl: string;
}

interface FolderItem {
  name: string;
  serverRelativeUrl: string;
  files: FileItem[];
}

function Documents() {
  const [folders, setFolders] = useState<FolderItem[]>([]);
  const [accessToken, setAccessToken] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  /**
   * downloadURL - Matching PHP JavaScript function exactly:
   * 
   * async function downloadURL(url, name, token){
   *   var response = await fetch("https://grahamcare.sharepoint.com/sites/WebDocuments/_api/web/GetFolderByServerRelativeUrl('"+url+"')/Files('"+name+"')/$value", {
   *     method: 'GET',
   *     headers: {
   *       'Content-Type': 'application/json',
   *       'Authorization': 'Bearer ' + token
   *     },
   *   });
   *   const blob = await response.blob();
   *   const newBlob = new Blob([blob]);
   *   const blobUrl = window.URL.createObjectURL(newBlob);
   *   const link = document.createElement('a');
   *   link.href = blobUrl;
   *   link.setAttribute('download', name);
   *   document.body.appendChild(link);
   *   link.click();
   *   link.parentNode.removeChild(link);
   *   window.URL.revokeObjectURL(blobUrl);
   * }
   */
  const downloadURL = async (serverRelativeUrl: string, fileName: string, token: string) => {
    try {
      const url = `https://grahamcare.sharepoint.com/sites/WebDocuments/_api/web/GetFolderByServerRelativeUrl('${serverRelativeUrl}')/Files('${fileName}')/$value`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        },
      });

      if (!response.ok) {
        throw new Error(`Download failed: ${response.status}`);
      }

      const blob = await response.blob();
      const newBlob = new Blob([blob]);
      const blobUrl = window.URL.createObjectURL(newBlob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      
      if (link.parentNode) {
        link.parentNode.removeChild(link);
      }
      
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error('Download error:', err);
      alert('Failed to download file. Please try again.');
    }
  };

  // Fetch folders and files from API
  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        // In production (Azure Static Web Apps), use relative URL /api/folders
        // In development, use localhost:3002
        const apiUrl = process.env.NODE_ENV === 'production' 
          ? '/api/folders' 
          : (process.env.REACT_APP_API_URL || 'http://localhost:3002/api/folders');
        
        console.log('Fetching from:', apiUrl);
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          const errorMessage = errorData.message || errorData.error || `Server error: ${response.status}`;
          throw new Error(errorMessage);
        }

        const data = await response.json();
        
        // Check if the response contains an error
        if (data.error) {
          throw new Error(data.message || data.error);
        }
        
        setFolders(data.folders || []);
        setAccessToken(data.accessToken || '');
        
      } catch (err: any) {
        console.error('Fetch error:', err);
        let errorMessage = err.message || 'Failed to load documents';
        
        // Provide more helpful error messages
        if (err.message && err.message.includes('Failed to fetch') || err.message.includes('NetworkError')) {
          errorMessage = 'Cannot connect to the server. Please ensure the backend server is running: npm run server';
        } else if (err.message && err.message.includes('tenant identifier')) {
          errorMessage = 'SharePoint credentials are not configured. Please update sharepoint.env with your Azure AD credentials.';
        }
        
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  /**
   * Accordion toggle - Matching PHP jQuery:
   * 
   * $(".accordion h3").click(function(){
   *   $(this).next("div").slideToggle("fast").siblings("div:visible").slideUp("fast");
   *   $(this).toggleClass("active");
   *   $(this).siblings("h3").removeClass("active");
   * });
   */
  const toggleFolder = (folderName: string) => {
    setActiveFolder(activeFolder === folderName ? null : folderName);
  };

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section documents-page">
          <div className="documents-container">
            <h1>Documents</h1>

            {loading ? (
              <div className="loading-state">
                <p>Loading documents...</p>
              </div>
            ) : error ? (
              <div className="error-state">
                <h2>Unable to Load Documents</h2>
                <p>{error}</p>
                <div className="sharepoint-fallback-info">
                  <p><strong>Please ensure:</strong></p>
                  <ul>
                    <li>The backend server is running: <code>npm run server</code></li>
                    <li>SharePoint credentials are configured in <code>sharepoint.env</code></li>
                  </ul>
                </div>
              </div>
            ) : (
              /* 
               * Accordion structure matching PHP:
               * <DIV class=accordion>
               *   <h3>$directory->Name</h3>
               *   <DIV>
               *     <ul class="word">
               *       <li><a onclick='downloadURL(...)'>Download $files->Name</a></li>
               *     </ul>
               *   </DIV>
               * </DIV>
               */
              <div className="accordion">
                {folders.map((folder) => (
                  <React.Fragment key={folder.name}>
                    <h3
                      className={activeFolder === folder.name ? 'active' : ''}
                      onClick={() => toggleFolder(folder.name)}
                    >
                      {folder.name}
                    </h3>
                    <div style={{ display: activeFolder === folder.name ? 'block' : 'none' }}>
                      <ul className="word">
                        {folder.files.length > 0 ? (
                          folder.files.map((file) => (
                            <li key={file.name}>
                              <button
                                type="button"
                                onClick={() => downloadURL(folder.serverRelativeUrl, file.name, accessToken)}
                                title="Click to download"
                                className="download-link-btn"
                              >
                                Download {file.name}
                              </button>
                            </li>
                          ))
                        ) : (
                          <li>No files in this folder</li>
                        )}
                      </ul>
                    </div>
                  </React.Fragment>
                ))}
                
                {/* Staff Portal link matching PHP */}
                <a href="https://staffportal.care"><h3>Staff Portal</h3></a>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <section className="footer__enquiry">
          <div className="footer__enquiry-container">
            <Link to="/contact-us" className="footer__enquiry-link">
              Enquire about Whitstable House <span className="footer__arrow">▶</span>
            </Link>
          </div>
        </section>
        <div className="footer__container">
          <section className="contact-section">
            <div className="contact-section__content">
              <p>Whitstable House, Boorman Way, Whitstable CT5 3SE</p>
              <p>Copyright © Whitstable House</p>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default Documents;
