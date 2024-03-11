import { FormControl, ValidatorFn } from '@angular/forms';

const passwordPatternValidator = (): ValidatorFn => {
  const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // הגדרת רגקס לסיסמה שמכילה לפחות 8 תווים עם אותיות גדולות, קטנות ומספרים

  return (control: FormControl) => {
    return control.value && !control.value.match(passwordRegEx)
      ? { invalidPassword: true } // אם הסיסמה לא עומדת בתנאים, תחזיר שגיאת invalidPassword
      : null; // אחרת, תחזיר null
  };
};

export const password = passwordPatternValidator();
