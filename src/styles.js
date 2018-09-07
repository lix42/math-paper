import preset from "jss-preset-default";
import jss from "jss";

jss.setup(preset());

const { classes } = jss
  .createStyleSheet({
    container: {
      margin: "auto",
      textAlign: "center",
      maxWidth: "600px",

      image: {
        width: "100px",
        height: "auto",
      },
    },
    left: {
      textAlign: "left",
    },
  })
  .attach();

export default classes;
