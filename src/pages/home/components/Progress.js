import React from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import styles from "../../../styles/progress.module.css";
import Icons from "../../../constants/Icons";
import Colors from "../../../constants/Colors";
import GlobalStyles from "../../../GlobalStyles";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

const Progress = (props) => {
  const location = useLocation();
  const isFirstStep = location.pathname === "/";
  const isSecondStep = location.pathname === "/second";
  const isThirdStep = location.pathname === "/third";
  return (
    <GlobalStyles>
      <div className={styles.steps}>
        <div className={styles.step}>
          <img
            src={isFirstStep ? Icons.step1 : Icons.check}
            style={{ width: 40, height: 40 }}
          />
          <div>
            {isSecondStep || isThirdStep ? (
              <Link to="/" style={{ textDecoration: "none" }}>
                <p
                  className="subTitleLight"
                  style={{
                    color: `${Colors.primary}`,
                  }}
                >
                  THÔNG TIN ĐẶT CHỖ
                </p>
              </Link>
            ) : (
              <p className="subTitleLight" style={{ color: `${Colors.black}` }}>
                THÔNG TIN ĐẶT CHỖ
              </p>
            )}
          </div>
        </div>

        <div className={styles.lineContanier}>
          <div
            className={styles.line}
            style={{
              borderColor:
                isSecondStep || isThirdStep ? `${Colors.primary}` : null,
            }}
          ></div>
        </div>

        <div className={styles.step}>
          <img
            src={
              isFirstStep
                ? Icons.step2dis
                : isThirdStep
                ? Icons.check
                : Icons.step2
            }
          />
          <div>
            {isThirdStep ? (
              <Link to="/second" style={{ textDecoration: "none" }}>
                <p
                  className="subTitleLight"
                  style={{
                    color: `${Colors.primary}`,
                  }}
                >
                  THÔNG TIN LIÊN LẠC
                </p>
              </Link>
            ) : (
              <p
                className="subTitleLight"
                style={{
                  color: isFirstStep ? `${Colors.line}` : `${Colors.black}`,
                }}
              >
                THÔNG TIN LIÊN LẠC
              </p>
            )}
          </div>
        </div>

        <div className={styles.lineContanier}>
          <div
            className={styles.line}
            style={{
              borderColor: isThirdStep ? `${Colors.primary}` : null,
            }}
          ></div>
        </div>

        <div className={styles.step}>
          <img
            src={isFirstStep || isSecondStep ? Icons.step3dis : Icons.step3}
          />
          <div>
            <p
              className="subTitleLight"
              style={{
                color: isThirdStep ? `${Colors.black}` : `${Colors.line}`,
              }}
            >
              HOÀN TẤT
            </p>
          </div>
        </div>
      </div>
    </GlobalStyles>
  );
};

export default withRouter(Progress);
