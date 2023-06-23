export const backgroundImage = {
    background: "url('/back.jpg') no-repeat center center fixed",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
    zIndex: -1, // Pozisyonu mutlak olarak ayarlayın
    top: 0, // Üst konumu 0 olarak ayarlayın
    left: 0, // Sol konumu 0 olarak ayarlayın
    
  }

  export const authStyles = {
    authFormContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      margin: 0,
      padding: 0,
    },
    authForm: {
      width: "420px",
      boxShadow: "rgb(0 0 0 / 16%) 1px 1px 10px",
      paddingTop: "30px",
      paddingBottom: "20px",
      borderRadius: "8px",
      backgroundColor: "white",
      
    },
    authFormContent: {
      paddingLeft: "12%",
      paddingRight: "12%",
    },
    authFormTitle: {
      textAlign: "center",
      marginBottom: "1em",
      fontSize: "24px",
      color: "rgb(34, 34, 34)",
      fontWeight: "800",
    },
    label: {
      fontSize: "14px",
      fontWeight: "600",
      color: "rgb(34, 34, 34)",
    },
  };