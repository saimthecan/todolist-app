export const styles = {
    body: {
      margin: 0,
      padding: 0,
    },
    todoAppContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      width: "100vw",
      backgroundColor: "#f5f5f5",
    },
    todoApp: {
      width: "45%",
      backgroundColor: "white",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    h1: {
      textAlign: "center",
    },
    h2: {
      textAlign: "center",
    },
    ul: {
      paddingLeft: 0,
    },
    button: {
      marginLeft: "2rem",
    },
    notification: {
      position: "fixed",
      top: "1rem",
      right: "1rem",
      backgroundColor: "#4caf50",
      color: "white",
      padding: "0.5rem 1rem",
      borderRadius: "5px",
      fontWeight: "bold",
    },
    deleted: {
      backgroundColor: "red",
    },
    completed: {
      backgroundColor: "blue",
    },
    readded: {
      backgroundColor: "rgb(159, 159, 38)",
    },
    duplicated: {
      backgroundColor: "#681504",
    },
    filterInput: {
        marginBottom: "0.5rem",
        
    },
  };
  
  
  export const todoInputStyles = {
    // TodoInput CSS
    todoInputForm: {
      display: "flex",
      justifyContent: "space-between",
    },
    input: {
        width: "99%",
    }
  };
  
  export const todoItemStyles = {
    todoItem: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      listStyleType: "none",
      paddingLeft: 0,
      marginBottom: "0.5rem",
    },
    checkbox: {
      marginRight: "1rem",
    },
    todoContent: {
      display: "inline-block",
      alignItems: "center",
      maxWidth: "calc(100% - 70px)",
      wordWrap: "break-word",
      verticalAlign: "middle",
      flex: 1,
    },
    deleteButton: {
      marginLeft: "auto",
    },
  
  };
  