import React from "react";

const styles = {
    wrapper: {
        paddingTop: 50,
        height: "100%",
        display: "flex",
        flexFlow: "row wrap",
        padding: 20,
        justifyContent: "space-around",
        alignContent: "flex-start",
        overflow: "auto",
        background: "#449F34",
        border: "solid 1px white"
      }
}

const Wrapper = props => <div style={styles.wrapper}>{props.children}</div>;

export default Wrapper;
