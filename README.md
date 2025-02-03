<!-- Frontend -->
To run frontend
cd frontend
npm run dev

<!-- Backend -->
To run backend

cd backend
php artisan serve

To run migrations
php artisan migrate

To rollback migrations
php artisan migrate:rollback

To clear cache and check db connection
php artisan config:clear
php artisan cache:clear

<!-- Stop port -->
To stop running port
npx kill-port (port number)