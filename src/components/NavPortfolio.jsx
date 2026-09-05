import React from "react";
import "../styles/NavPortfolio.css";


function NavPortfolio({ onNavigate, activeIndex }) {
    const navigationItems = [

        {
            id: 0,
            label: "Home",
            ariaLabel: "Go to Home section",
        },

        {
            id: 1,
            label: "Profile",
            ariaLabel: "Go to Profile section",
        },

        {
            id: 2,
            label: "Projects",
            ariaLabel: "Go to Projects section",
        },
    ];

return (

  <nav className="TotalNavPortfolio" aria-label="Portfolio navigation">
      
      <div className="NavPortfolioInner">

          <ul className="UlNavPortfolio"> {navigationItems.map((item) => (

                <li className="LiNavPortfolio"key={item.id}>

                  <button type="button" className={
                                activeIndex === item.id
                                ? "NavPortfolioButton active"
                                : "NavPortfolioButton"
                               }
                         onClick={() => onNavigate(item.id)}
                                aria-label={item.ariaLabel}
                                aria-current={
                                  activeIndex === item.id
                                    ? "page"
                                    : undefined
                              }>

                            <span className="NavButtonIndicator" />

                            <span className="NavButtonText">
                                {item.label}
                            </span>

                  </button>

                </li>
              ))}

            </ul>

      </div>
      
  </nav>
  );
}

export default NavPortfolio;

