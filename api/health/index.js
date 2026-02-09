/**
 * Azure Function: Health Check
 */

module.exports = async function (context, req) {
  context.res = {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      status: 'ok',
      environment: process.env.AZURE_TENANT_ID ? 'configured' : 'not configured',
      timestamp: new Date().toISOString()
    })
  };
};



