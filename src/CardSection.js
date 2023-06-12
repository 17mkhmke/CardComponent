import React, { useState } from "react";
import { Card } from '@uifabric/react-cards';
import { Text, Icon, initializeIcons, Toggle } from '@fluentui/react';

const container = {
  margin: '10vh 0',
};

const icon = {
  width: '3rem',
};

const styles = {
  cardStyles: {
    root: {
      backgroundColor: 'white',
      padding: 20,
      borderTop: '5px solid #0078d4',
      width: '900px',
      height: '100%',
      margin: 'auto',
      minWidth:'480px'
    },
  },
  header: {
    root: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0078d4',
      textAlign: 'center',
      justifyContent: 'center'
    },
  },
  lightTitle: {
    root: {
      fontSize: 16,
      color: '#666',
      marginBottom: 10,
    },
  },
  serviveCard: {
    root: {
      fontSize: 16,
      paddingBottom: 20,
      paddingTop: 30,
      display: 'flex',
      alignItems: 'center',
      // marginLeft: '10px' 
    },
  
  },
  amount: {
    root: {
      fontSize: 16,
      paddingBottom: 20,
      paddingTop: 30,
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: 5,
    },
    input: {
      marginLeft: 5,
      width: '100px',
      padding: '4px',
      alignSelf: 'center', // Align input fields vertically
    },
  },
  percentage: {
    root: {
      fontSize: 16,
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      marginRight: 5,
    },
    input: {
      marginLeft: 5,
      width: '100px',
      padding: '4px',
      alignSelf: 'center', // Align input fields vertically
    },
  },
  cardSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  toggleGreen: {
    backgroundColor: 'green',
    marginLeft: '10px',
  },
  toggleRed: {
    backgroundColor: 'red',
    marginLeft: '10px',
  },
};

const card = {
  title: 'Havansteder',
  lightTitle: 'Account',
  amount: 'Nummer',
  icon: 'https://i.postimg.cc/mrnFkQxX/logo-Havensteder-sterk-in-wonen.png',
  percentage: 'Dienstenkaart',
  serviveCard: 'Dienstenkaart | > 10'
};

const CardSection = () => {
  initializeIcons();
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleToggleChange = () => {
    setIsToggleOn(!isToggleOn);
  };

  const getToggleStyle = () => {
    return isToggleOn ? styles.toggleGreen : styles.toggleRed;
  };

  return (
    <div style={container}>
      <div className="s-Grid-col ms-sm3 ms-xl3">
        <Card styles={styles.cardStyles}>
          <Card.Section styles={styles.cardSection}>
            <Card.Item>
              <img src={card.icon} alt="Icon" style={icon} />
              <Text styles={styles.lightTitle}>{card.lightTitle}</Text>
            </Card.Item>
            <Card.Item>
              <Text styles={styles.header}>{card.title}</Text>
            </Card.Item>
            <Card.Item>
              <Text styles={styles.amount}>
                <Icon iconName="Lock" style={styles.amount.icon} />
                {card.amount}
                <input type="text" style={styles.amount.input} />
              </Text>
            </Card.Item>
            <Card.Item>
              <Text styles={styles.percentage}>
                <Icon iconName="Lock" style={styles.percentage.icon} />
                {card.percentage}
                <input type="text" style={styles.percentage.input} />
              </Text>
            </Card.Item>
            <Card.Item>
              <Text styles={styles.serviveCard}>
                {card.serviveCard} 
                <Toggle checked={isToggleOn} onChange={handleToggleChange} style={getToggleStyle()} /> 
                {/* {isToggleOn ? "Yes" : "No"} */}
              </Text>
            </Card.Item>
          </Card.Section>
        </Card>
      </div>
    </div>
  );
};

export default CardSection;
