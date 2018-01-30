// 1.2 | Insert our first users in users collection
// ------------------------------------------------
// PASTE 3 USER INSERT QUERIES HERE
db.users.insert({   "firstName": "rober",   "lastName": "Strada",   "dateBirth": ISODate("1976-04-10T18:28:09.369Z"),   "address": {     "streetAddress": "21 2nd Street",     "city": "Madrid",     "state": "SP",     "postalCode": "28760"   } })
WriteResult({ "nInserted" : 1 })
> db.users.insert({
...   "firstName": "Jorge",
...   "lastName": "Gonzalez",
...   "dateBirth": ISODate("1989-05-06T18:28:09.369Z"),
...   "address": {
...     "streetAddress": "Test Street",
...     "city": "Madrid",
...     "state": "SP",
...     "postalCode": "28760"
...   }
... })

db.user.insert({
    ...   "firstName": "rober",
    ...   "lastName": "Strada",
    ...   "dateBirth": ISODate("1976-04-10T18:28:09.369Z"),
    ...   "address": {
    ...     "streetAddress": "21 2nd Street",
    ...     "city": "Madrid",
    ...     "state": "SP",
    ...     "postalCode": "28760"
    ...   }
    ... })
    WriteResult({ "nInserted" : 1 })


    db.users.myShop.insert({
        ...   "firstName": "John",
        ...   "lastName": "Smith",
        ...   "dateBirth": ISODate("2016-12-10T18:28:09.369Z"),
        ...   "address": {
        ...     "streetAddress": "21 2nd Street",
        ...     "city": "New York",
        ...     "state": "NY",
        ...     "postalCode": "10021"
        ...   }
        ... })
        WriteResult({ "nInserted" : 1 })
    


// 1.3 | Insert our first products in products collection
// ------------------------------------------------------
// PASTE 3 PRODUCT INSERT QUERIES HERE
db.products.insert({
    ...    "name": "Water Bottle",
    ...    "description":"High quality glass bottle provides a healthier way to drink.  Silicone sleeve provides a good grip, a see-through window, and protects the glass vessel.  Eliminates toxic leaching that plastic can cause.  Innovative design holds 22-1/2 ounces.  Dishwasher safe",
    ...    "category":"Kitchen",
    ...    "price":23.0
    ... })
    WriteResult({ "nInserted" : 1 })

    db.products.insert({
        ... ...    "name": "Iron potato",
        ... ...    "description":"Spyce and taste iron potatos made with all the flavor of Matadero Madrid",
        ... ...    "category":"Snaks",
        ... ...    "price":2.0
        ... ... })
        WriteResult({ "nInserted" : 1 })
  
        db.products.insert({
            ... ...    "name": "Marcs Tupper",
            ... ...    "description":"Fancy and nice Tupper made with the best quality plastic of market",
            ... ...    "category":"treassures",
            ... ...    "price":50.0
            ... ... })
            WriteResult({ "nInserted" : 1 })

// 1.4 | Getting Started with queries
// ----------------------------------
// PASTE SHOPPING CART QUERY HERE


// PASTE LIST PRODUCTS QUERY HERE


// PASTE CATEGORY PRODUCTS QUERY HERE


// PASTE DELETE PRODUCT QUERY HERE


// PASTE REVIEW QUERY HERE

