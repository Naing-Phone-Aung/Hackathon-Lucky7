const communityList = [
  {
    id: 1,
    groupName: "TastyTribe",
    description:
      "A friendly community of food lovers sharing recipes and reviews.",
    type: "public",
    created_at: "2h ago",
    members: 3200,
    online: 128,
    ranking: 3,
    code : "df34325",
    community_create_date: "20 Dec 2003",
    likes: 4250,
    comments: 312,
    posts: [
      {
        username: "FoodieCraze",
        timeAgo: "1h ago",
        title: "What’s your ultimate 3-ingredient go-to meal?",
        context:
          "Let’s share quick meals you can whip up with only 3 ingredients!",
        likes: 150,
        comments: 12,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80",
        context:
          "Whether it’s toast, cheese, and egg or pasta, olive oil, and garlic—sometimes 3 is all it takes. Share your favorite fuss-free combos that save time but still satisfy. Perfect for busy evenings or anyone who hates doing dishes.",
      },
      {
        username: "QuickBites",
        timeAgo: "5h ago",
        title: "How do you spice up instant noodles?",
        context: "Looking for ideas to upgrade a basic bowl of noodles.",
        likes: 92,
        comments: 6,
        image:
          "https://images.unsplash.com/photo-1643749708594-b2c98ed5e719?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        context:
          "Instant noodles are a go-to meal, but the real magic lies in the upgrades. From soft-boiled eggs to kimchi or even peanut butter, the possibilities are endless. Got a hack that turns your cup noodles gourmet? Share it with the tribe!",
      },
      {
        username: "SimpleChef",
        timeAgo: "1d ago",
        title: "Do you meal prep?",
        context: "Does planning your weekly menu help or stress you out?",
        likes: 104,
        comments: 8,
        image:
          "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?q=80&w=2101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        context:
          "Meal prepping can save time, reduce waste, and help with healthy eating—but for some, it’s overwhelming. What works best for you? Share your strategies, fail-safe recipes, or tools that make your Sundays smoother.",
      },
    ],
  },
  {
    id: 2,
    groupName: "FoodiesHub",
    description:
      "Join fellow foodies in discovering new eateries and food trends.",
    type: "public",
    image:
      "https://images.unsplash.com/photo-1521305916504-4a1121188589?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
    created_at: "1d ago",
    members: 2900,
    online: 203,
    ranking: 5,
    code : "87745sf",
    community_create_date: "5 May 2011",
    likes: 3890,
    comments: 275,
    posts: [
      {
        username: "ChiliLover",
        timeAgo: "2d ago",
        title: "Best hawker center in Singapore?",
        context: "Need suggestions for local gems I can try out next weekend!",
        likes: 230,
        comments: 30,
        image:
          "https://images.unsplash.com/photo-1543826173-70651703c5a4?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        context:
          "Singapore’s hawker centers are a goldmine of flavor. Whether it’s laksa at Old Airport Road or satay at Lau Pa Sat, everyone has their go-to. Let’s compile the ultimate foodie map for locals and travelers alike!",
      },
      {
        username: "TasteScout",
        timeAgo: "3h ago",
        title: "New fusion place opened in Clarke Quay!",
        context: "Korean-Mexican bowls with a twist—worth trying?",
        likes: 115,
        comments: 14,
        image:
          "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=2136&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        context:
          "Fusion food can be hit or miss—but when it hits, it’s unforgettable. Anyone tried the new spot near Clarke Quay? Share your reviews, photos, and whether it’s hype or worth the hype!",
      },
    ],
  },
  {
    id: 3,
    groupName: "BiteClub",

    description:
      "Exclusive club for culinary creators and cooking enthusiasts.",
    type: "private",
    image:
      "https://images.unsplash.com/photo-1459789034005-ba29c5783491?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3",
    created_at: "3d ago",
    members: 1500,
    online: 88,
    ranking: 9,
    code : "835hfasf",
    community_create_date: "12 Aug 2015",
    likes: 1890,
    comments: 143,
    posts: [
      {
        username: "ChefLin",
        timeAgo: "6h ago",
        title: "Let’s talk plating — what’s your aesthetic?",
        context: "Do you go minimal, rustic, or colorful chaos?",
        likes: 102,
        comments: 9,
        image:
          "https://images.unsplash.com/photo-1459789034005-ba29c5783491?q=80",
        context:
          "Plating isn’t just about looks—it tells a story. Do you lean minimalist like Nordic cuisine, or go full color-burst with edible flowers? Share your best plate photos and tips. Let’s inspire one another with style and flavor!",
      },
      {
        username: "BakeQueen",
        timeAgo: "1d ago",
        title: "Best chocolate chip cookie texture?",
        context: "Crunchy vs chewy — what’s your preference?",
        likes: 68,
        comments: 5,
        image:
          "https://images.unsplash.com/photo-1590080874088-eec64895b423?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        context:
          "Cookies: crispy edge or gooey center? Bakers, weigh in! This debate has split the kitchen for years. Share your tips, your secret ingredients, or even your go-to recipes for achieving the perfect cookie every time.",
      },
      {
        username: "TheSous",
        timeAgo: "2d ago",
        title: "Sous-vide steak success stories?",
        context: "Just tried my first sous-vide! Any must-know tips?",
        likes: 140,
        comments: 20,

        image:
          "https://images.unsplash.com/photo-1629677595313-880bd1ab80d0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        context:
          "Sous-vide might sound fancy, but it’s all about control. Precision cooks swear by it for steaks, eggs, and even desserts. Share your favorite temps, fails, or tips for getting restaurant-level results at home.",
      },
    ],
  },
  {
    id: 4,
    groupName: "SnackCircle",
    description: "A fun group to share your favorite snacks and finds.",
    type: "public",
    members: 4100,
    online: 314,
    ranking: 2,
    code : "4sdfasf",
    community_create_date: "28 Jul 2018",
    posts: [
      {
        username: "CrunchyCraver",
        timeAgo: "1h ago",
        title: "Best chips combo?",
        context:
          "Meal prepping can save time, reduce waste, and help with healthy eating—but for some, it’s overwhelming. What works best for you? Share your strategies, fail-safe recipes, or tools that make your Sundays smoother.",
        likes: 200,
        comments: 17,
        image:
          "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3",
      },
      {
        username: "SnackAttack",
        timeAgo: "4h ago",
        title: "Weird but good snack combos?",
        context: "Try peanut butter and pickles. Trust me!",
        likes: 118,
        comments: 11,
        image:
          "https://images.unsplash.com/photo-1673646961216-f39cb04802ca?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 5,
    groupName: "FlavorFam",
    description: "A tight-knit community for home chefs and flavor explorers.",
    type: "private",

    created_at: "4d ago",
    members: 900,
    online: 47,
    ranking: 10,
    code : "4sdfasf",
    community_create_date: "10 Feb 2020",
    likes: 1200,
    comments: 80,

    posts: [
      {
        username: "LateNightBites",
        timeAgo: "9h ago",
        title: "Top midnight snack choices?",
        context: "What's your go-to when hunger hits at 2am?",
        likes: 134,
        comments: 19,
        image:
          "https://images.unsplash.com/photo-1668665771867-7b3b53d7597a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        context:
          "When the fridge light is your only companion at night, what do you reach for? From ramen and cereal to cold pizza or frozen grapes, share your odd and beloved midnight cravings!",
      },
    ],
  },
];

export default communityList;
