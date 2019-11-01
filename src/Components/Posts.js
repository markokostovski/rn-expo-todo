import React, { useEffect } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { fetchPosts } from "../redux/posts/actions";

const Posts = props => {
  const { fetchPosts, posts } = props;

  useEffect(() => {
    fetchPosts();
  }, []);

  if (posts.loading) {
    return <Text style={styles.center}>Loading...</Text>;
  }

  if (posts.error) {
    return <Text style={styles.center}>{posts.error}</Text>;
  }

  return (
    <FlatList
      data={posts.data}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
};

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);

const styles = StyleSheet.create({
  center: {
    marginTop: 200,
    textAlign: "center"
  }
});
