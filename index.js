const array = [
    {
      orderId: 554,
      creationDate: "2017-03-25T10:35:20", // Saturday
      orderLines: [
        { productId: 9872, name: "Pencil", quantity: 3, unitPrice: 3.0 },
      ],
    },
    {
      orderId: 555,
      creationDate: "2017-03-25T11:24:20", // Saturday
      orderLines: [
        { productId: 9872, name: "Pencil", quantity: 1, unitPrice: 3.0 },
        { productId: 1746, name: "Eraser", quantity: 1, unitPrice: 1.0 },
      ],
    },
    {
      orderId: 453,
      creationDate: "2017-03-27T14:53:12", // Monday
      orderLines: [
        { productId: 5723, name: "Pen", quantity: 4, unitPrice: 4.22 },
        { productId: 9872, name: "Pencil", quantity: 3, unitPrice: 3.12 },
        {
          roductId: 3433,
          name: "Erasers Set",
          quantity: 1,
          unitPrice: 6.15,
        },
      ],
    },
    {
      orderId: 431,
      creationDate: "2017-03-20T12:15:02", // Monday
      orderLines: [
        { productId: 5723, name: "Pen", quantity: 7, unitPrice: 4.22 },
        {
          productId: 3433,
          name: "Erasers Set",
          quantity: 2,
          unitPrice: 6.15,
        },
      ],
    },
    {
      orderId: 690,
      creationDate: "2017-03-26T11:14:00", // Sunday
      orderLines: [
        { productId: 9872, name: "Pencil", quantity: 4, unitPrice: 3.12 },
        { productId: 4098, name: "Marker", quantity: 5, unitPrice: 4.5 },
      ],
    },
  ];

  function quantityGoods(id) {
    let map = new Map([
      ["MONDAY", 0],
      ["TUESDAY", 0],
      ["WEDNESDAY", 0],
      ["THURSDAY", 0],
      ["FRIDAY", 0],
      ["SATURDAY", 0],
      ["SUNDAY", 0],
     // ["PRODUCT", 0]
    ]);
   // let s;
    for (let elem of array) {
      let date = new Date(elem.creationDate);
      date = date.getDay();
      let quantity;
      for (let product of elem.orderLines) {
        if (product.productId === id) {
          quantity = product.quantity;
          //s = product.name;
        }
      }
      if (quantity > 0) {
        switch (date) {
          case 1:
            map.set("MONDAY", map.get("MONDAY") + quantity);
            break;
          case 2:
            map.set("TUESDAY", map.get("TUESDAY") + quantity);
            break;
          case 3:
            map.set("WEDNESDAY", map.get("WEDNESDAY") + quantity);
            break;
          case 4:
            map.set("THURSDAY", map.get("THURSDAY") + quantity);
            break;
          case 5:
            map.set("FRIDAY", map.get("FRIDAY") + quantity);
            break;
          case 6:
            map.set("SATURDAY", map.get("SATURDAY") + quantity);
            break;
          case 0:
            map.set("SUNDAY", map.get("SUNDAY") + quantity);
            break;
          default:
          // alert( "Нет таких значений" );
        }
      }
    }
   // map.set("PRODUCT", s);
    // let objName = {
    //   "PRODUCT": s
    // }
    // let objQuantity = Object.fromEntries(map);
    return Object.fromEntries(map); //[objName, objQuantity]
  }
  let f = quantityGoods(3433);
  console.log(f);