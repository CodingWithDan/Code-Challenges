//============================
//SH - MULTISELECT
//============================

// Your task is to implement multiselect from scratch (styling is not required)
// While closed it should show selected items separated by coma,
// on click it should open a list where you can check/uncheck items

const Component = () => {
    const [items, setItems] = React.useState([]);
    const [selected, setSelected] = React.useState([]);
    const [isOpen, setIsOpen] = React.useState(false);
  
    React.useEffect(() => {
      setItems([
        { label: 'd', value: 'd' },
        { label: 'a', value: 'a' },
        { label: 'b', value: 'b' },
        { label: 'c', value: 'c' },
      ]);
    }, []);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleSelection = (value) => {
      const updatedSelection = [...selected];
  
      if (updatedSelection.includes(value)) {
        const index = updatedSelection.indexOf(value);
        updatedSelection.splice(index, 1);
      } else {
        updatedSelection.push(value);
      }
  
      setSelected(updatedSelection);
    };
  
    return (
      <div className="container">
        <div onClick={toggleDropdown}>
          {selected.length > 0 ? selected.join(', ') : 'Click me to begin'}
        </div>
        {isOpen && (
          <div>
            {items.map((item) => (
              <label key={item.value}>
                <input
                  type="checkbox"
                  value={item.value}
                  checked={selected.includes(item.value)}
                  onChange={() => handleSelection(item.value)}
                />
                {item.label}
              </label>
            ))}
          </div>
        )}
      </div>
    );
  };
  
  ReactDOM.render(<Component />, document.querySelector("#app"));
  