import React from 'react'
import Student from './Student';

const School = () => {

      const students = [
        { id: 1, name: "שרה", grade: "א", age: 16, average: 95 },
        { id: 2, name: "רבקה", grade: "ב", age: 17, average: 55 },
        { id: 3, name: "רחל", grade: "ג", age: 15, average: 80 }
  ];

  function studentExit(name) {
    console.log("השער נפתח");

    const exitTime = new Date().toLocaleTimeString("he-IL");

    console.log(`${name}- יצאת בשעה ${exitTime}`);
  }
  return (
    <div>
    <h1>בית הספר</h1>

      {students.map(student => (
        <Student
          key={student.id}
          student={student}
          onExit={studentExit}
        />
      ))}
    </div>
  )
}

export default School

// קומפוננטת בית הספר:
// צרי רשימת תלמידי בית הספר. 
// קומפוננטת בית הספר תציג עבור כל תלמיד קומפוננטת פרטי תלמיד.
// בקומפוננטת בית ספר- הגדירי פונקציה  שבכל פעם שתלמיד יוצא מבית הספר מדפיסה לקונסול: "השער נפתח".
