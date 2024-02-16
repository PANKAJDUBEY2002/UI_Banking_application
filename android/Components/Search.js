import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
    };
  }

  searchFunction = (text) => {
    this.setState({ searchValue: text });
    // You can perform any additional actions based on the search text
  };

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          placeholder="Search Here..."
          lightTheme
          round
          value={this.state.searchValue}
          onChangeText={(text) => this.searchFunction(text)}
          autoCorrect={false}
		  containerStyle={{ backgroundColor: 'transparent', borderBottomWidth: 0, borderTopWidth: 0 }} // Remove background and borders
          inputStyle={{ backgroundColor: 'transparent' }} // Remove input background color
		  
        />
      </View>
    );
  }
}

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 2,
	
  },
});
