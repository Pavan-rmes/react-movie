export function ColorBox({ boxcolor }) {
  const styles = {
    backgroundColor: boxcolor,
    width: "200px",
    height: "30px",
    margin: "10px 0px"
  };
  return <div style={styles}></div>;
}
