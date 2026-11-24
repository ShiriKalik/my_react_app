import React from 'react'

const Student = ({ student, onExit }) => {

  let title = "";

  if (student.average > 90) {
    title = "תלמיד מצטיין";
  } else if (student.average < 60) {
    title = "טעון שיפור";
  }
  return (
    <div>
   <h2>{student.name}</h2>
      <p>גיל: {student.age}</p>
      <p>ממוצע: {student.average}</p>
      <p>{title}</p>

      <button onClick={() => onExit(student.name)}>
        יציאה מבית הספר
      </button>
    </div>
  )
}

export default Student

// קומפוננטת תלמיד:
// הקומפוננטה תציג את הפרטים האישיים של התלמיד, וכפתור שייצג יציאה מבית הספר.
// אם ממוצע הציונים של התלמיד גבוה מ-90 הוסיפי לתלמיד תואר "תלמיד מצטיין", אם הממוצע נמוך מ-60 הוסיפי- תואר "טעון שיפור". 
// כאשר תלמיד לוחץ על כפתור היציאה תודפס הודעה בקונסול:  " <שם התלמיד>-  יצאת בשעה <שעת יציאה>"
