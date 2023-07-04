# GroceryApp
Grocery Delivery App is developed in React Native and uses firebase for data Storage and Authentication. The application also uses React Redux for internal data storage.

When you open the application, you are presented with the home page. From here you can add items from the popular items bar to you cart. The items are being imported from a Firebase FireStore database that holds all items relevant information. When the plus button is pressed the unique ID code for the pressed item is added to a cart array in React Redux to keep track of user's items, as well as keeping track of the users total cart cost.

<img src="https://github.com/jzjonah/GroceryApp/assets/55960435/02d80fcb-4259-44c8-b646-746fccdce09d" width="400">

Before going through with your order you first go to the profile page and from there to the login page to sign into an already created profile within firebase authentication or register a new account.

<img src="https://github.com/jzjonah/GroceryApp/assets/55960435/9e564c8e-6e32-4341-89b5-bd21b417f017" width="400">

<img src="https://github.com/jzjonah/GroceryApp/assets/55960435/0af2f39d-e782-4c80-b045-3553c3c5b79a" width="400">

After you are signed in and added the desired items from the home page you can go to the cart page where you will see your order as well as your total cost. This is being pulled from the React Redux cart object that is taking the array of item IDs and finding the matching items from the items collection within the FireStore database to show the users the proper information. 
Once Place Order is pressed the list of item IDs and user identification is sent to a FireStore database to represent a confirmed purchase. This will also clear the cart object within React Redux and give the user an Alert telling them the order has been successfully placed.

<img src="https://github.com/jzjonah/GroceryApp/assets/55960435/706afea5-b049-4924-ba3e-b6726a5fb44c" width="400">

<img src="https://github.com/jzjonah/GroceryApp/assets/55960435/2578543d-28f3-4d5e-bb1d-c0c2c9da4b67" width="400">

Next Steps of this project\
-Fill out the options of items to purchase\
-Add the relevant image assets for categories and items as placeholder are currently filling these places \
-Implement favorites page to allow users to get to their desired items faster\
-Add sign in option to header to allow for easier sign in and a more efficient use path\
-Add a quantity option to items and cart object
