import { useState } from 'react'
import './App.css'
import BusinessCard from './BusinessCard';

function App() {
  const [search, setSearch] = useState('');

  const businessCardsData = [
    {
      name: "Oleksandr Novik-Dichko",
      education: "VAMK University",
      jobTitle: "Software Developer",
      company: "VAMK",
      email: "sasha@example.com",
      logoUrl: "https://www.vamk.fi/wp-content/uploads/2022/09/logo-iso-768x428.webp"
    },
    {
      name: "John Doe",
      education: "Harvard University",
      jobTitle: "Data Scientist",
      company: "VAMK",
      email: "john.doe@vamk.com",
      logoUrl: "https://www.vamk.fi/wp-content/uploads/2022/09/logo-iso-768x428.webp"
    },
    {
      name: "Jane Smith",
      education: "MIT",
      jobTitle: "Frontend Developer",
      company: "VAMK",
      email: "jane.smith@vamk.com",
      logoUrl: "https://www.vamk.fi/wp-content/uploads/2022/09/logo-iso-768x428.webp"
    },
    {
      name: "Alice Brown",
      education: "Stanford University",
      jobTitle: "UI/UX Designer",
      company: "VAMK",
      email: "alice.brown@vamk.com",
      logoUrl: "https://www.vamk.fi/wp-content/uploads/2022/09/logo-iso-768x428.webp"
    },
    {
      name: "Bob White",
      education: "Oxford University",
      jobTitle: "Product Manager",
      company: "VAMK",
      email: "bob.white@vamk.com",
      logoUrl: "https://www.vamk.fi/wp-content/uploads/2022/09/logo-iso-768x428.webp"
    },
    {
      name: "Charlie Green",
      education: "Cambridge University",
      jobTitle: "SEO Specialist",
      company: "VAMK",
      email: "charlie.green@vamk.com",
      logoUrl: "https://www.vamk.fi/wp-content/uploads/2022/09/logo-iso-768x428.webp"
    },
    {
      name: "David Johnson",
      education: "University of California",
      jobTitle: "Software Engineer",
      company: "VAMK",
      email: "david.johnson@vamk.com",
      logoUrl: "https://www.vamk.fi/wp-content/uploads/2022/09/logo-iso-768x428.webp"
    },
    {
      name: "Emily Davis",
      education: "Princeton University",
      jobTitle: "Backend Developer",
      company: "VAMK",
      email: "emily.davis@vamk.com",
      logoUrl: "https://www.vamk.fi/wp-content/uploads/2022/09/logo-iso-768x428.webp"
    },
    {
      name: "Michael Harris",
      education: "Yale University",
      jobTitle: "Project Manager",
      company: "VAMK",
      email: "michael.harris@vamk.com",
      logoUrl: "https://www.vamk.fi/wp-content/uploads/2022/09/logo-iso-768x428.webp"
    }
  ];
  
  const filteredCards = businessCardsData.filter((card) => {
    return (
      card.name.toLowerCase().includes(search.toLowerCase()) ||
      card.company.toLowerCase().includes(search.toLowerCase()) ||
      card.jobTitle.toLowerCase().includes(search.toLowerCase())
    );
  });
  
  return (
    <div className="app-container">
      {/* Строка поиска */}
      <input
        type="text"
        placeholder="Search by name, company, or job title"
        value={search}
        onChange={(e) => setSearch(e.target.value)}  // обновление состояния поиска
        className="search-bar"
      />
      {/* Контейнер карточек */}
      <div className="card-container">
        {filteredCards.map((card, index) => (
          <BusinessCard 
            key={index}
            name={card.name}
            education={card.education}
            jobTitle={card.jobTitle}
            company={card.company}
            email={card.email}
            logoUrl={card.logoUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;