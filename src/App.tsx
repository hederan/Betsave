import { Suspense } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Landing } from './pages';
import { Provider } from './provider';
import { Layout } from './layout';
import { EarnMoney } from './pages/earn';
import { BetSmart } from './pages/bet';
import { Dashboard } from './pages/dashboard';
import { AccountManage } from './pages/account';

function App() {
  return (
    <Suspense fallback={<>Loading</>}>
      <Router>
        <Provider>
          <Layout>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/earn" element={<EarnMoney />} />
              <Route path="/bet" element={<BetSmart />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/account" element={<AccountManage />} />
            </Routes>
          </Layout>
        </Provider>
      </Router>
    </Suspense>
  );
}

export default App;
