"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const FilterSidebar = () => {
  const [openCategory, setOpenCategory] = useState("IDEAL FOR")
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleCategory = (category) => {
    setOpenCategory(openCategory === category ? "" : category)
  }

  const handleCheckboxChange = (categoryName, option) => {
    setSelectedFilters(prev => {
      const updatedCategoryFilters = prev[categoryName] ? [...prev[categoryName]] : [];
      const optionIndex = updatedCategoryFilters.indexOf(option);

      if (optionIndex > -1) {
        updatedCategoryFilters.splice(optionIndex, 1);
      } else {
        updatedCategoryFilters.push(option);
      }
      return { ...prev, [categoryName]: updatedCategoryFilters };
    });
  };

  const handleUnselectAll = (categoryName) => {
    setSelectedFilters(prev => ({
      ...prev,
      [categoryName]: []
    }));
  };

  const categories = [
    {
      name: "IDEAL FOR",
      options: ["Men", "Women", "Baby & Kids"],
    },
    {
      name: "OCCASION",
      options: ["Men", "Women", "Baby & Kids"],
    },
    {
      name: "WORK",
      options: ["Men", "Women", "Baby & Kids"],
    },
    {
      name: "FABRIC",
      options: ["Men", "Women", "Baby & Kids"],
    },
    {
      name: "SEGMENT",
      options: ["Men", "Women", "Baby & Kids"],
    },
    {
      name: "SUITABLE FOR",
      options: ["Men", "Women", "Baby & Kids"],
    },
    {
      name: "RAW MATERIALS",
      options: ["Men", "Women", "Baby & Kids"],
    },
    {
      name: "PATTERN",
      options: ["Men", "Women", "Baby & Kids"],
    },
  ]

  return (
    <div className="filter-sidebar">
      {/* Customizable checkbox */}
      <div className="customizable-option">
        <input type="checkbox" className="checkbox" />
        <span className="label">CUSTOMIZABLE</span>
      </div>

      {/* Categories */}
      <div className="categories">
        {categories.map((category) => (
          <div key={category.name} className="category">
            <div className="category-header" onClick={() => toggleCategory(category.name)}>
              <div className="category-title">
                <span>{category.name}</span>
              </div>
              <div className="category-toggle">
                <span className="all-label">All</span>
                <ChevronDown className={`chevron ${openCategory === category.name ? "rotated" : ""}`} />
              </div>
            </div>

            {/* Dropdown content */}
            {openCategory === category.name && (
              <div className="dropdown-content">
                {/* Unselect all option */}
                <div className="unselect-option">
                  <button className="unselect-button" onClick={() => handleUnselectAll(category.name)}>Unselect all</button>
                </div>

                {category.options.map((option) => (
                  <div key={option} className="option">
                    <input
                      type="checkbox"
                      id={`${category.name}-${option}`}
                      className="checkbox"
                      checked={selectedFilters[category.name]?.includes(option) || false}
                      onChange={() => handleCheckboxChange(category.name, option)}
                    />
                    <label htmlFor={`${category.name}-${option}`} className="option-label">
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FilterSidebar
