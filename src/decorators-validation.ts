interface ValidatorConfig {
  [property: string]: {
    [validateableProp: string]: string[];
  };
}

const registeredValidators: ValidatorConfig = {};

function validationHelper(
  className: string,
  propName: string,
  ruleName: string,
) {
  let existingValidators: string[] = [];
  if (
    className in registeredValidators &&
    propName in registeredValidators[className]
  ) {
    existingValidators = [...registeredValidators[className][propName]];
  }
  let newValidator = { [propName]: [...existingValidators, ruleName] };
  return {
    ...registeredValidators[className],
    ...newValidator,
  };
}

function ValidateRequired(target: any, propName: string) {
  registeredValidators[target.constructor.name] = validationHelper(
    target.constructor.name,
    propName,
    "required",
  );
}

function ValidatePositive(target: any, propName: string) {
  registeredValidators[target.constructor.name] = validationHelper(
    target.constructor.name,
    propName,
    "positive",
  );
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) return true;
  let isValid = true;
  for (const prop in objValidatorConfig) {
    if (objValidatorConfig.hasOwnProperty(prop)) {
      const element = objValidatorConfig[prop];
      for (const validator of element) {
        switch (validator) {
          case "required":
            isValid = isValid && !!obj[prop];
            break;
          case "positive":
            isValid = isValid && obj[prop] > 0;
            break;
        }
      }
    }
  }
  return isValid;
}

class Course {
  @ValidateRequired
  title: string;
  @ValidateRequired
  @ValidatePositive
  price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

console.log("--------------Decorators: Validation--------------");

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();
  const titleEl = document.getElementById("course-title") as HTMLInputElement;
  const priceEl = document.getElementById("course-price") as HTMLInputElement;

  const title = titleEl.value;
  const price = Number(priceEl.value);
  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid Input, please try again.");
    console.log(registeredValidators);
  } else {
    console.log(createdCourse);
  }
});
