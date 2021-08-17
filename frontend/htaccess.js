const fs = require('fs');
const path = require('path');

const data = `
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
`;

fs.writeFileSync(path.join(__dirname, 'dist', '.htaccess'), data, 'utf8')