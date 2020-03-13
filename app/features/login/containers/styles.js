import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute"
  },
  logo: {
    height: 300,
    width: 300,
    marginBottom: 100,
    shadowColor: "#202020",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 5
  },
  email: {
    width: 300,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white"
  },
  password: {
    width: 300,
    borderBottomColor: "white",
    borderBottomWidth: 1,
    color: "white"
  },
  btnLogin: {
    width: 300,
    marginTop: 20,
    textAlign: "center",
    borderColor: "white",
    borderWidth: 1,
	padding: 5,
	backgroundColor: 'rgba(0,0,0,.2)'
  },
  btnLoginText: {
	textAlign: "center",
	fontFamily: 'marvelFont',
	color: "white",
	fontSize: 18,
	fontWeight: 'bold',
  },
  scrollView: {
    flex: 1
  }
});

export default styles;
