import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav items
 * Body
 *  - Search
 *  - Restaurants Container
 *    - Restaurant Card
 * Footer
 *  - Copyright
 *  - Links
 */

const Header = () =>  {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="data:image/jpeg;base64,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"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const resCardBackground = {
  backgroundColor: '#f0f0f0'
}

const resList = [
  {
      "info": {
          "id": "291793",
          "name": "Puresouth",
          "cloudinaryImageId": "xlm9brrvh2skp3x2w4ju",
          "locality": "Mini Bypass Road",
          "areaName": "Palayam",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "South Indian",
              "Chinese",
              "Juices"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "162872",
          "avgRatingString": "4.4",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 4.5,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "4.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 22:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                      "description": "Delivery!"
                  },
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                              }
                          },
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "30% OFF",
              "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/puresouth-mini-bypass-road-palayam-kozhikode-291793",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "693175",
          "name": "Top Form_Chevayoor",
          "cloudinaryImageId": "b5303a94c367062c158ce278bf6307a3",
          "locality": "Chevayurn",
          "areaName": "Kunnamangalam",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Indian",
              "South Indian",
              "Andhra",
              "Tandoor",
              "Snacks",
              "Chinese",
              "Biryani",
              "Salads",
              "Desserts",
              "Beverages",
              "Ice Cream"
          ],
          "avgRating": 4.4,
          "parentId": "457332",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 14,
              "lastMileTravel": 1.5,
              "serviceability": "SERVICEABLE",
              "slaString": "10-15 mins",
              "lastMileTravelString": "1.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 23:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      "description": "OnlyOnSwiggy"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "OnlyOnSwiggy",
                                  "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/top-form-chevayoor-chevayurn-kunnamangalam-kozhikode-693175",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "492029",
          "name": "Kaapi Koottam",
          "cloudinaryImageId": "qu7gpsp5dfeuiefdgcxx",
          "locality": "Nellikode",
          "areaName": "Pottammal",
          "costForTwo": "₹199 for two",
          "cuisines": [
              "South Indian",
              "Kerala",
              "Biryani",
              "Snacks",
              "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "20446",
          "avgRatingString": "4.3",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 2.5,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 22:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kaapi-koottam-nellikode-pottammal-kozhikode-492029",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "442529",
          "name": "New Sana Restaurant",
          "cloudinaryImageId": "fye2qfecqlb21lfrnjgd",
          "locality": "Kunnamangalam",
          "areaName": "Malaparamba",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "South Indian",
              "North Indian",
              "Chinese",
              "Biryani"
          ],
          "avgRating": 4.4,
          "parentId": "266556",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 23,
              "lastMileTravel": 2.9,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.9 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/new-sana-restaurant-kunnamangalam-malaparamba-kozhikode-442529",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "382724",
          "name": "New Malabar Family Restaurant",
          "cloudinaryImageId": "dypfwfzd1seuqyanabsv",
          "locality": "Karaparamba",
          "areaName": "Bilathikkulam",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Chinese",
              "North Indian",
              "South Indian",
              "Biryani"
          ],
          "avgRating": 4.4,
          "parentId": "251724",
          "avgRatingString": "4.4",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 29,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "₹40 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/new-malabar-family-restaurant-karaparamba-bilathikkulam-kozhikode-382724",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "76386",
          "name": "Pillais Snacks",
          "cloudinaryImageId": "ulakzdc3hynvutvkjrbg",
          "locality": "Markazudaawa",
          "areaName": "Palayam",
          "costForTwo": "₹150 for two",
          "cuisines": [
              "South Indian"
          ],
          "avgRating": 4.2,
          "veg": true,
          "parentId": "20818",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 6.3,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "6.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 19:57:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "v1695133679/badges/Pure_Veg111.png",
                      "description": "pureveg"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/pillais-snacks-markazudaawa-palayam-kozhikode-76386",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "480089",
          "name": "Mayflower",
          "cloudinaryImageId": "qmdcmkhj3ecylvnvauyd",
          "locality": "Beach Road",
          "areaName": "Bilathikkulam",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Chinese",
              "North Indian",
              "South Indian",
              "Biryani"
          ],
          "avgRating": 4.3,
          "parentId": "288496",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 5.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "5.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/mayflower-beach-road-bilathikkulam-kozhikode-480089",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "490981",
          "name": "Top Form_Mavoor Road",
          "cloudinaryImageId": "b5303a94c367062c158ce278bf6307a3",
          "locality": "Mavoor Road",
          "areaName": "Kuttichira",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "South Indian",
              "Kerala",
              "Biryani",
              "Chinese",
              "Salads",
              "Seafood"
          ],
          "avgRating": 4.4,
          "parentId": "454775",
          "avgRatingString": "4.4",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 6.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "6.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-26 02:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Biryani.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/top-form-mavoor-road-mavoor-road-kuttichira-kozhikode-490981",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "153273",
          "name": "Hotel Sagar (Old Sagar)",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/23/9673164b-1faa-4dea-b152-1e53105458b0_153273 ss.jpg",
          "locality": "Mavoor Road",
          "areaName": "Kuttichira",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Chinese",
              "South Indian",
              "Ice Cream",
              "Biryani"
          ],
          "avgRating": 4.5,
          "parentId": "20206",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-26 00:00:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-Biryani.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Biryani.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/hotel-sagar-old-sagar-mavoor-road-kuttichira-kozhikode-153273",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "569368",
          "name": "Starbucks Coffee",
          "cloudinaryImageId": "2418209798927d733a50f5d2ebcc2aee",
          "locality": "Hilite Mall",
          "areaName": "Ummalathoor",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Beverages",
              "Cafe",
              "Snacks",
              "Desserts",
              "Bakery",
              "Ice Cream"
          ],
          "avgRating": 4.4,
          "parentId": "195515",
          "avgRatingString": "4.4",
          "totalRatingsString": "100+",
          "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/starbucks-coffee-hilite-mall-ummalathoor-kozhikode-569368",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "453968",
          "name": "Jodhpuri Bhandaar Sweets & Chaats",
          "cloudinaryImageId": "b4v3cdddtthr1exwzcpw",
          "locality": "Palazhi Road",
          "areaName": "Mavoor",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Desserts"
          ],
          "avgRating": 4,
          "veg": true,
          "parentId": "273164",
          "avgRatingString": "4.0",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 33,
              "lastMileTravel": 3.5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "3.5 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/jodhpuri-bhandaar-sweets-and-chaats-palazhi-road-mavoor-kozhikode-453968",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "230155",
          "name": "Sagar Restaurant (New Sagar)",
          "cloudinaryImageId": "sfazfve7qn0ybwbgrrhj",
          "locality": "Mavoor Road",
          "areaName": "Palayam",
          "costForTwo": "₹400 for two",
          "cuisines": [
              "Chinese",
              "South Indian",
              "Ice Cream",
              "Biryani"
          ],
          "avgRating": 4.3,
          "parentId": "20195",
          "avgRatingString": "4.3",
          "totalRatingsString": "10K+",
          "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 23:45:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/sagar-restaurant-new-sagar-mavoor-road-palayam-kozhikode-230155",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "439492",
          "name": "Alankar Family Restaurant",
          "cloudinaryImageId": "zveupq8flxzp8h2chwd4",
          "locality": "Mini Bypass Road",
          "areaName": "Bilathikkulam",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Chinese",
              "South Indian",
              "Biryani"
          ],
          "avgRating": 4.4,
          "parentId": "29691",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "7.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 22:45:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/alankar-family-restaurant-mini-bypass-road-bilathikkulam-kozhikode-439492",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "377529",
          "name": "Suprabatham Veg",
          "cloudinaryImageId": "ukkna38gkgfjdrgm8lxt",
          "locality": "Beach Road",
          "areaName": "Beach Road",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "Chinese",
              "North Indian",
              "South Indian",
              "Biryani"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "197567",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 7.3,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "7.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 21:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-South%20Indian.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-South%20Indian.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "10% OFF",
              "subHeader": "UPTO ₹40"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/suprabatham-veg-beach-road-kozhikode-377529",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "476795",
          "name": "Jaya Mayflower",
          "cloudinaryImageId": "i8hap60qmtop6rwysgcf",
          "locality": "Kandam Kulam Road",
          "areaName": "Palayam",
          "costForTwo": "₹300 for two",
          "cuisines": [
              "South Indian",
              "Kerala",
              "Biryani",
              "North Indian",
              "Seafood",
              "Tandoor"
          ],
          "avgRating": 4.4,
          "parentId": "454634",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 37,
              "lastMileTravel": 6,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "6.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 22:30:00",
              "opened": true
          },
          "badges": {
              "imageBadges": [
                  {
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                      "description": "Delivery!"
                  }
              ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {
                      "badgeObject": [
                          {
                              "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                              }
                          }
                      ]
                  },
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/jaya-mayflower-kandam-kulam-road-palayam-kozhikode-476795",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "242117",
          "name": "Adaminte Chayakkada",
          "cloudinaryImageId": "392f97c751c3dad45ce4f6bb36709d60",
          "locality": "Silk Street",
          "areaName": "Kuttichira",
          "costForTwo": "₹500 for two",
          "cuisines": [
              "South Indian",
              "Kerala",
              "Biryani",
              "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "8326",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 34,
              "lastMileTravel": 7.1,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "7.1 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-26 00:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/adaminte-chayakkada-silk-street-kuttichira-kozhikode-242117",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "288569",
          "name": "Tasty Hut",
          "cloudinaryImageId": "atikvzcn2kucbdyf1u5k",
          "locality": "Kunnamangalam",
          "areaName": "Kunnamangalam",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "Chinese",
              "North Indian",
              "South Indian",
              "Ice Cream",
              "Biryani"
          ],
          "avgRating": 4.1,
          "parentId": "20281",
          "avgRatingString": "4.1",
          "totalRatingsString": "5K+",
          "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 2.3,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "2.3 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-26 01:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/tasty-hut-kunnamangalam-kozhikode-288569",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "586587",
          "name": "Hotel Anhar",
          "cloudinaryImageId": "brlon7gvnugotpekjgav",
          "locality": "MM Ali Road",
          "areaName": "Palayam",
          "costForTwo": "₹200 for two",
          "cuisines": [
              "South Indian",
              "Kerala",
              "North Indian",
              "Biryani",
              "Chinese"
          ],
          "avgRating": 4.2,
          "parentId": "351010",
          "avgRatingString": "4.2",
          "totalRatingsString": "500+",
          "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 23:59:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/hotel-anhar-mm-ali-road-palayam-kozhikode-586587",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "336155",
          "name": "Kovilakam Residency",
          "cloudinaryImageId": "znkrwmqs5rkj7vjubld4",
          "locality": "Mini Bypass Road",
          "areaName": "Palayam",
          "costForTwo": "₹800 for two",
          "cuisines": [
              "Chinese",
              "North Indian",
              "South Indian",
              "Biryani"
          ],
          "avgRating": 4.4,
          "parentId": "120398",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 32,
              "lastMileTravel": 4.6,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "4.6 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 22:30:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/kovilakam-residency-mini-bypass-road-palayam-kozhikode-336155",
          "type": "WEBLINK"
      }
  },
  {
      "info": {
          "id": "403210",
          "name": "Clock Tower Restaurant",
          "cloudinaryImageId": "cgvtv3c3iwed2qewtidv",
          "locality": "Karaparamba",
          "areaName": "Mavoor",
          "costForTwo": "₹256 for two",
          "cuisines": [
              "Chinese",
              "North Indian",
              "South Indian",
              "Ice Cream",
              "Biryani"
          ],
          "avgRating": 4.2,
          "parentId": "243969",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
              "deliveryTime": 43,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
              "nextCloseTime": "2024-04-25 23:00:00",
              "opened": true
          },
          "badges": {},
          "isOpen": true,
          "aggregatedDiscountInfoV2": {},
          "type": "F",
          "badgesV2": {
              "entityBadges": {
                  "imageBased": {},
                  "textBased": {},
                  "textExtendedBadges": {}
              }
          },
          "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {},
                  "video": {}
              }
          },
          "reviewsSummary": {},
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
          "link": "https://www.swiggy.com/restaurants/clock-tower-restaurant-karaparamba-mavoor-kozhikode-403210",
          "type": "WEBLINK"
      }
  }
]

const RestaurantCard = (props) => {
  const {name, cuisines, avgRatingString, costForTwo, sla, cloudinaryImageId} = props.resData.info;
  return (
    <div className="res-card" style={resCardBackground}>
      <img 
        className="res-logo" 
        alt="res-logo" 
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4>{avgRatingString} Stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{sla.slaString}</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
           resList.map(restaurant => <RestaurantCard resData={restaurant}/>) 
        }        
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
  <div className="app">
    <Header/>
    <Body/>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
