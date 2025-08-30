import { useState } from "react";

function App() {
  const [activity, setActivity] = useState("");
  const [listData, setListData] = useState([]);
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setActivity(value);
    
    // Real-time duplicate check
    const trimmedValue = value.trim();
    if (trimmedValue === "") {
      setIsDuplicate(false);
    } else {
      const duplicate = listData.some(item => 
        item.toLowerCase() === trimmedValue.toLowerCase()
      );
      setIsDuplicate(duplicate);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addActivity();
    }
  };

  function addActivity() {
    const trimmedActivity = activity.trim();
  
    if (trimmedActivity === "") {
      alert("Bhai, kuch toh likh! 😄 Please enter an activity!");
      return;
    }
  
    if (isDuplicate) {
      alert(`"${trimmedActivity}" already exists in your list! 🔄\nPlease try something different.`);
      return;
    }
  
    setListData((prevList) => [...prevList, trimmedActivity]);
    setActivity("");
    setIsDuplicate(false);
  }

  function removeActivity(i) {
    const updateList = listData.filter((_, id) => {
      return i !== id;
    });
    setListData(updateList);
  }

  function removeAll() {
    if (window.confirm("Are you sure you want to remove all activities?")) {
      setListData([]);
    }
  }

  const styles = {
    appContainer: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px 0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    mainCard: {
      maxWidth: '600px',
      margin: '0 auto',
      backgroundColor: 'white',
      borderRadius: '20px',
      boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
      overflow: 'hidden'
    },
    header: {
      background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
      color: 'white',
      padding: '30px',
      textAlign: 'center'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      margin: '0',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    subtitle: {
      margin: '10px 0 0 0',
      opacity: '0.9',
      fontSize: '1rem'
    },
    body: {
      padding: '30px'
    },
    inputContainer: {
      display: 'flex',
      marginBottom: '30px',
      gap: '10px'
    },
    input: {
      flex: '1',
      padding: '15px 20px',
      border: '2px solid #e0e6ed',
      borderRadius: '25px',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    inputDuplicate: {
      flex: '1',
      padding: '15px 20px',
      border: '2px solid #ff4757',
      borderRadius: '25px',
      fontSize: '1rem',
      outline: 'none',
      transition: 'all 0.3s ease',
      backgroundColor: '#fff5f5'
    },
    inputFocus: {
      borderColor: '#2196F3',
      boxShadow: '0 0 0 3px rgba(33, 150, 243, 0.1)'
    },
    addButton: {
      padding: '15px 25px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    addButtonDisabled: {
      padding: '15px 25px',
      backgroundColor: '#cccccc',
      color: '#666666',
      border: 'none',
      borderRadius: '25px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'not-allowed',
      transition: 'all 0.3s ease'
    },
    duplicateWarning: {
      color: '#ff4757',
      fontSize: '0.9rem',
      marginTop: '8px',
      marginLeft: '20px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '5px'
    },
    addButtonHover: {
      backgroundColor: '#45a049',
      transform: 'translateY(-1px)'
    },
    taskList: {
      marginBottom: '20px'
    },
    taskItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '15px 20px',
      margin: '10px 0',
      backgroundColor: '#f8f9fa',
      borderRadius: '15px',
      border: '2px solid #e9ecef',
      transition: 'all 0.3s ease',
      animation: 'slideIn 0.5s ease-out'
    },
    taskItemHover: {
      transform: 'translateY(-2px)',
      boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
      borderColor: '#2196F3'
    },
    taskContent: {
      display: 'flex',
      alignItems: 'center',
      flex: '1'
    },
    taskNumber: {
      backgroundColor: '#2196F3',
      color: 'white',
      borderRadius: '50%',
      width: '30px',
      height: '30px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      marginRight: '15px'
    },
    taskText: {
      fontSize: '1.1rem',
      color: '#2d3748',
      fontWeight: '500'
    },
    deleteButton: {
      backgroundColor: '#ff4757',
      color: 'white',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    deleteButtonHover: {
      backgroundColor: '#ff3742',
      transform: 'scale(1.1)'
    },
    emptyState: {
      textAlign: 'center',
      padding: '40px 20px',
      color: '#6c757d'
    },
    emptyIcon: {
      fontSize: '4rem',
      marginBottom: '20px',
      opacity: '0.3'
    },
    clearAllButton: {
      backgroundColor: '#ff4757',
      color: 'white',
      border: 'none',
      borderRadius: '25px',
      padding: '12px 30px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'block',
      margin: '20px auto'
    },
    clearAllButtonHover: {
      backgroundColor: '#ff3742',
      transform: 'scale(1.05)'
    },
    taskCounter: {
      textAlign: 'center',
      marginTop: '20px'
    },
    badge: {
      backgroundColor: '#17a2b8',
      color: 'white',
      padding: '8px 16px',
      borderRadius: '20px',
      fontSize: '0.9rem',
      fontWeight: '500'
    }
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.mainCard}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>📝 TODO LIST</h1>
          <p style={styles.subtitle}>Stay organized, stay productive</p>
        </div>

        {/* Body */}
        <div style={styles.body}>
          {/* Input Section */}
          <div>
            <div style={styles.inputContainer}>
              <input
                type="text"
                style={isDuplicate ? styles.inputDuplicate : styles.input}
                placeholder="What needs to be done? (e.g., Buy groceries, Study React...)"
                value={activity}
                onChange={handleChange}
                onKeyPress={handleKeyPress}
                onFocus={(e) => {
                  if (!isDuplicate) {
                    e.target.style.borderColor = '#2196F3';
                    e.target.style.boxShadow = '0 0 0 3px rgba(33, 150, 243, 0.1)';
                  }
                }}
                onBlur={(e) => {
                  if (!isDuplicate) {
                    e.target.style.borderColor = '#e0e6ed';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              />
              <button
                onClick={addActivity}
                style={isDuplicate ? styles.addButtonDisabled : styles.addButton}
                disabled={isDuplicate}
                onMouseOver={(e) => {
                  if (!isDuplicate) {
                    e.target.style.backgroundColor = '#45a049';
                    e.target.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isDuplicate) {
                    e.target.style.backgroundColor = '#4CAF50';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
              >
                ➕ Add
              </button>
            </div>
            
            {/* Duplicate Warning */}
            {isDuplicate && activity.trim() !== "" && (
              <div style={styles.duplicateWarning}>
                ⚠️ This task already exists in your list!
              </div>
            )}
          </div>

          {/* Tasks List */}
          {listData.length === 0 ? (
            <div style={styles.emptyState}>
              <div style={styles.emptyIcon}>📋</div>
              <h5>No tasks yet</h5>
              <p>Add your first task above to get started!</p>
            </div>
          ) : (
            <div style={styles.taskList}>
              {listData.map((data, i) => (
                <div
                  key={i}
                  style={styles.taskItem}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = '#2196F3';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.borderColor = '#e9ecef';
                  }}
                >
                  <div style={styles.taskContent}>
                    <div style={styles.taskNumber}>{i + 1}</div>
                    <span style={styles.taskText}>{data}</span>
                  </div>
                  <button
                    onClick={() => removeActivity(i)}
                    style={styles.deleteButton}
                    title="Delete task"
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = '#ff3742';
                      e.target.style.transform = 'scale(1.1)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = '#ff4757';
                      e.target.style.transform = 'scale(1)';
                    }}
                  >
                    🗑️
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Remove All Button */}
          {listData.length >= 2 && (
            <button
              onClick={removeAll}
              style={styles.clearAllButton}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#ff3742';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#ff4757';
                e.target.style.transform = 'scale(1)';
              }}
            >
              🗑️ Clear All Tasks
            </button>
          )}

          {/* Stats */}
          {listData.length > 0 && (
            <div style={styles.taskCounter}>
              <span style={styles.badge}>
                {listData.length} {listData.length === 1 ? 'task' : 'tasks'} remaining
              </span>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        body {
          margin: 0;
          padding: 0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

export default App;