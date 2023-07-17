import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../component/Helmet/Helmet";
import CommonSection from "../component/UI/category/common-section/CommonSection";

function Login() {
  // hook
  const loginRef = useRef();
  const passwordRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <form
                action=""
                className="w-full  mt-4 p-4"
                onSubmit={submitHandler}
              >
                <div className="form-group ">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginRef}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                  />
                </div>
                {/* --------------- Button --------------- */}
                <button type="submit" className="rounded text-white text-[1.2rem] p-[.5rem] bg-red-400  text-center hover:bg-blue-500">
                  <span className="text-center m-auto">Login</span>
                </button>
                <div>
                  <Link to={"/register"}>
                    <span className="text-center font-[100]">
                      {" "}
                      Don't have an account? Create an account{" "}
                    </span>
                  </Link>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Login;
