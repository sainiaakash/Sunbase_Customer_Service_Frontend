## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Login Page
http://localhost:3000 will open the login page; 

To login provide following credentials:

    usename : test@sunbasedata.com
    
    password: Test@123

After successfull login, we will see customer list page.

## CustomerList page
    Functionality of CustomerList page is as follows:
        1. on loading page first time, it will fetch all the customer records from DB and desplay them as a list
        2. In each row, two buttons are provided Edit/Delete
                a. On clicking Edit, that row will become editable. Edit the inputs and press Save button that appeared in that row. 
                   Clicking Save button will ask for confirmation to save
                b. On clicking Delete will ask for confirmation, and delete the records from DB if confirmed
        3. For navigating to AddCustomer page, click on AddCustomer
        4. For searching, select particular searching criteria from drop-down select menu and then enter value of selected field.
        Hit Search button to view results

## Add new Customer page: 
    enter value of all fields and hit Submit button
    after successfull saving, a dialog notifying 'data saved' will appear on screen


