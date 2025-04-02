const config = {
    screens: {
      Home: {
        path: "home/:id",
        parse: {
          id: (id: any) => `${id}`,
        },
      },
      Profile: {
        path: "profile/:id",
        parse: {
          id: (id:any) => `${id}`,
        },
      },
      Notifications: "notifications",
      Settings: "settings",
    },
  };
  
  const linking = {
    prefixes: ["demo://app", "com.lafise.digital.test://app"],
    config,
  };
  
  export default linking;