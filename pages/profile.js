import privateRoute from "../components/privateRoute";
function Profile() {
  return <div>Project</div>;
}
Profile.getInitialProps = () => {
  let message = "Something unexpected happened!";
  console.log("message", message);
};
export default privateRoute(Profile);
// protected route
