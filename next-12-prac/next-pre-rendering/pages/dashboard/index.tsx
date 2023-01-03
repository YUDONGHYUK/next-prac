import { useEffect, useState } from 'react';

type DashboardType = {
  posts: number;
  likes: number;
  followers: number;
  following: number;
};

export default function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState<null | DashboardType>(
    null
  );

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = await response.json();
      setDashboardData(data);
      setIsLoading(false);
    };

    fetchDashboardData();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h2>Posts - {dashboardData?.posts}</h2>
      <h2>Likes - {dashboardData?.likes}</h2>
      <h2>Followers - {dashboardData?.followers}</h2>
      <h2>Following - {dashboardData?.following}</h2>
    </div>
  );
}
