import './App.scss';
import { Layout } from 'antd';
import { Routes, Route  } from "react-router-dom";
import { routeConfig } from "./Routes/router";
import HeaderComp from './Components/HeaderComp';
const { Content } = Layout;

function App() {
  return (
    <>
      <Layout className="layout">
        <HeaderComp />
        <Content style={{ padding: '0 50px', }}>
          <div className="site-layout-content">
            <Routes>
              {
                routeConfig && routeConfig.map(({path,element}, key) => {
                  return <Route key={key} path={path} element={element} />
                })
              }
            </Routes>
          </div>
        </Content>
      </Layout>
    </>
  );
}

export default App;
