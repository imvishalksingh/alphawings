# Alphabusi Auto-Deploy Script

Write-Host "Starting Deployment for alphabusi.com..." -ForegroundColor Cyan

# 1. Build
Write-Host "Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) { 
    Write-Host "Build failed!" -ForegroundColor Red
    exit 
}

# 2. Zip
Write-Host "Zipping files..." -ForegroundColor Yellow
if (Test-Path dist.zip) { Remove-Item dist.zip }
Compress-Archive -Path dist\* -DestinationPath dist.zip -Force

# 3. Upload
Write-Host "Uploading to server..." -ForegroundColor Yellow
$keyPath = "C:\Users\ASUS\Downloads\codecanyon-GZGcwhVZ-worksuite-project-management-system\worksuite-new-6.0.05\crm-key.pem"
scp -i $keyPath dist.zip ubuntu@3.26.115.116:/tmp/dist.zip

# 4. Extract and Permissions
Write-Host "Extracting and setting permissions on server..." -ForegroundColor Yellow
$remoteCmd = 'sudo unzip -o /tmp/dist.zip -d /var/www/alphabusi && sudo chown -R www-data:www-data /var/www/alphabusi && sudo chmod -R 755 /var/www/alphabusi'
ssh -i $keyPath ubuntu@3.26.115.116 $remoteCmd

# 5. Cleanup
Write-Host "Cleaning up local zip..." -ForegroundColor Yellow
if (Test-Path dist.zip) { Remove-Item dist.zip }

Write-Host "Deployment Successful! Check https://alphabusi.com" -ForegroundColor Green
