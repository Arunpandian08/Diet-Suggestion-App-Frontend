import React, { useState } from 'react';
import './Styles/bmi.css'
import { FcApproval } from 'react-icons/fc'

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const heightInMeters = height / 100; // Convert height from cm to meters
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBMI(bmiValue);
  };

  const getBMIMessage = (bmi) => {
    if (!bmi) return '';
  
    if (bmi < 18.5) return '<span className=text-center style="color: blue;">Underweight</span>';
    else if (bmi >= 18.5 && bmi <= 24.9) return '<span style="color: green;">Normal weight</span>';
    else if (bmi >= 25 && bmi <= 29.9) return '<span style="color: orange;">Overweight</span>';
    else return '<span style="color: red;">Obesity</span>';
  };
  
  const clearForm = () => {
    setHeight('');
    setWeight('');
  };

  return (
    <div className='home'>
      <div className="b-container">
        <div className="bmi-form">
          <div className="b-card">
            <h2 className="bmi">BMI Calculator</h2>
            <div className="b-inputBox">
              <input type="Number" value={height}
                onChange={(e) => setHeight(e.target.value)} required="required" />
              <span>Height in CM</span>
            </div>
            <div className="b-inputBox">
              <input type="Number" value={weight}
                onChange={(e) => setWeight(e.target.value)} required="required" />
              <span className="user">Weight in Kgs</span>
            </div>
            <button className="enter" onClick={() => { calculateBMI(); clearForm(); }}>Calculate</button>
            <div className="result mb-4"> <h4> Your BMI is:
              {bmi && <span className='m-0 p-0 text-primary'> {bmi}</span>}</h4>
              <h4>Status:{" "}
              {bmi && <span dangerouslySetInnerHTML={{ __html: getBMIMessage(parseFloat(bmi)) }}></span>}
              </h4>
              </div>
          </div>
        </div>
      </div>
      <div className="main d-flex justify-content-center">
        <div className="header w-100 text-center text-white"><h2>Why 'BMI' is Important for our body?</h2></div>
          <p className="para">
          The normal range for BMI (Body Mass Index) varies depending on factors such as age, gender, and ethnicity, but generally, the World Health Organization (WHO) defines the following BMI categories for adults:
          </p>
          <div style={{margin:'5vb', padding: '5vb',background:'#fff',borderRadius:'10px',boxShadow:'0 0 10px' }}>
            <p><i className="fa-solid fa-circle-check"></i> <strong>Under Weight:</strong>BMI less than 18.5</p>
            <p><i className="fa-solid fa-circle-check"></i> <strong>Normal Weight:</strong>BMI between 18.5 and 24.9</p>
            <p><i className="fa-solid fa-circle-check"></i> <strong>Over Weight:</strong>BMI between 25 and 29.9</p>
            <p><i className="fa-solid fa-circle-check"></i> <strong>Obesity:</strong>BMI of 30 or Greater</p>
          </div>
        <div className="header w-100 text-white"><h2>These tips can help you achieve lasting weight-loss success. </h2></div>
        <div className="points pt-2">
          <div style={{margin:'5vb', padding: '5vb',background:'#fff',borderRadius:'10px',boxShadow:'0 0 10px' }}>
            <p><FcApproval />&nbsp;&nbsp;Drink plenty of water.</p>
            <p><FcApproval />&nbsp;&nbsp;Start your day with a glass of water. </p>
            <p><FcApproval />&nbsp;&nbsp;Drink a glass of water before you start the meal.</p>
            <p><FcApproval />&nbsp;&nbsp;Have glass of water while you are having the meal.</p>
            <p><FcApproval />&nbsp;&nbsp;Stay away from sweetened bottle drinks, especially sodas.</p>
            <p><FcApproval />&nbsp;&nbsp;Include in your diet things that contains more water like tomatoes and watermelons.</p>
            <p><FcApproval />&nbsp;&nbsp;Eat fresh fruits instead of drinking fruit juice.</p>
            <p><FcApproval />&nbsp;&nbsp;If you do have a craving for fruit juice then go for fresh fruit juice.</p>
            <p><FcApproval />&nbsp;&nbsp;Do not skip Breakfast.</p>
            <p><FcApproval />&nbsp;&nbsp;Eat regular meals.</p>
            <p><FcApproval />&nbsp;&nbsp;Eat plenty of fruit and veg.</p>
            <p><FcApproval />&nbsp;&nbsp;Brush your teeth after every meal, especially dinner.</p>
            <p><FcApproval />&nbsp;&nbsp;Eat high-fibre foods.</p>
            <p><FcApproval />&nbsp;&nbsp;Read food lables.</p>
            <p><FcApproval />&nbsp;&nbsp;Use a smaller plate.</p>
            <p><FcApproval />&nbsp;&nbsp;Don't ban foods.</p>
            <p><FcApproval />&nbsp;&nbsp;Do not stock junk food.</p>
            <p><FcApproval />&nbsp;&nbsp;Cut down on alcohol.</p>
            <p><FcApproval />&nbsp;&nbsp;Plan your meals.</p>
            <p><FcApproval />&nbsp;&nbsp;Write down what you eat for one week and you will lose weight.</p>
            <p><FcApproval />&nbsp;&nbsp;Add 10% to the amount of daily calories you think you're eating.</p>
            <p><FcApproval />&nbsp;&nbsp;Get an online weight loss buddy to lose more weight.</p>
            <p><FcApproval />&nbsp;&nbsp;After Breakfast stick to water.</p>
            <p><FcApproval />&nbsp;&nbsp; three fewer bites of your meal.</p>
            <p><FcApproval />&nbsp;&nbsp;Watch one less hour of TV.</p>
            <p><FcApproval />&nbsp;&nbsp;Wait until your stomach rumbles before you reach for food.</p>
            <p><FcApproval />&nbsp;&nbsp;Sniff a banana, an apple, or a peppermint while you feel hungry.</p>
            <p><FcApproval />&nbsp;&nbsp;Spend 10 minutes a day walking up and down stairs.</p>
            <p><FcApproval />&nbsp;&nbsp;Walk five minutes for at atleast every 2 hrs.</p>
            <p><FcApproval />&nbsp;&nbsp;Don't buy any prepared food that lists sugar. </p>
            <p><FcApproval />&nbsp;&nbsp;Put your forks or spoon down between every bite.</p>
            <p><FcApproval />&nbsp;&nbsp;Throw out your fat clothes for good.</p>
            <p><FcApproval />&nbsp;&nbsp;Walk before dinner and you'll cut colories and your appetite.</p>
            <p><FcApproval />&nbsp;&nbsp;Eat 90% of home food.</p>
            <p><FcApproval />&nbsp;&nbsp;Eat water-rich foods and you'll eat fewer calories overall.</p>
            <p><FcApproval />&nbsp;&nbsp;Bulk up your meals with veggies.</p>
            <p><FcApproval />&nbsp;&nbsp;Switch to ordinary Coffee.</p>
            <p><FcApproval />&nbsp;&nbsp;If you're going to indulge, choose fat-releasing foods.</p>
            <p><FcApproval />&nbsp;&nbsp;Enjoy high-calorie treats as the accent.</p>
            <p><FcApproval />&nbsp;&nbsp;Eat cereal for breakfast five days a week.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMICalculator;
