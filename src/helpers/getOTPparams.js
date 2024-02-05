export function getOTPparams(error) {
  return {
    width: "66px",
    height: "66px",
    fontSize: "32px",
    backgroundColor: "#EBEFF2",
    borderRadius: "10px",
    outline: "none",
    border: "none",
    textAlign: "center",
    color: error ? "#F45656" : "black",
  };
}
