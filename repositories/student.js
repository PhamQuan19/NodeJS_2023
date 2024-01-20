// import { Student } from "../models";
import Exception from "../exceptions/Exception.js";
import { Student } from "../models/index.js";
import { faker } from "@faker-js/faker";
import { print } from "../helpers/print.js";

const getAllStudents = async ({ page, size, searchString }) => {
  //   console.log("get all students with paging");
  // Aggregate data for all student
  page=parseInt(page)
  size=parseInt(size)
  let filteredStudents = await Student.aggregate([
    {
      $match: {
        $or:[
            {
                name:{$regex:`.*${searchString}.*`, $options:'i'}
            },
            {
                email:{$regex:`.*${searchString}.*`, $options:'i'}
            },
            {
                address:{$regex:`.*${searchString}.*`, $options:'i'}
            }

        ]
      }
    },
    {
      $skip: (page - 1) * size,
    },
    {
      $limit: size,
    },
  ]);
  return filteredStudents;
};

const insertStudent = async ({
  name,
  email,
  languages,
  gender,
  phoneNumber,
  address,
}) => {
  //   console.log("insert student");
  try {
    debugger;
    const student = await Student.create({
      name,
      email,
      languages,
      gender,
      phoneNumber,
      address,
    });
    return student;
    // debugger
  } catch (exception) {
    //error from validations
    if (!!exception.errors) {
      throw new Exception("Input error", exception.errors);
    }
    debugger;
  }
  debugger;
};

async function generateFakeStudents() {
  let fakeStudents = [];
  for (let i = 0; i < 1000; i++) {
    let fakeStudent = {
      name: `${faker.person.fullName()}-faker`,
      email: faker.internet.email(),
      languages: [
        faker.helpers.arrayElement(["English", "Vietnames", "Japanese"]),
        faker.helpers.arrayElement(["Korean", "Lao", "Chinese"]),
      ],
      gender: faker.helpers.arrayElement(["Male", "Female"]),
      phoneNumber: faker.phone.number(),
      address: faker.location.city(),
    };
    fakeStudents.push(fakeStudent);
  }
  debugger;
  await Student.insertMany(fakeStudents);
}

export default {
  getAllStudents,
  insertStudent,
  generateFakeStudents,
};
