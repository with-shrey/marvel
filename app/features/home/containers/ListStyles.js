import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  flatListContainer: {
  },
  listContainer: {
    flex: 1,
    backgroundColor: '#202020'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 15,
    right: 20,
    borderRadius: 45,
  },
  floatingIcon: {
    height: 40,
    width: 40
  },
  floatingButtonBG: {
    backgroundColor: 'red',
    height: 28,
    width: 28,
    position: 'absolute',
    borderRadius: 20,
    left: 6,
    top:6
  }
});

export default styles;
