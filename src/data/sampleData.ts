// src/data/sampleData.ts

import { Staff } from '../types/staff';

export const sampleStaff: Staff[] = [
  {
    id: "1",
    name: "Adebayo Johnson",
    firstName: "Adebayo",
    lastName: "Johnson",
    position: "Senior Budget Analyst",
    department: "Planning & Research",
    employeeId: "AKS001",
    email: "adebayo.johnson@aksgov.ng",
    phone: "+234 803 123 4567",
    phoneNumber: "+234 803 123 4567",
    dateOfEmployment: "2018-03-15",
    hireDate: "2018-03-15",
    dateOfBirth: "1985-07-22",
    gender: "Male",
    maritalStatus: "Married",
    address: "12 Independence Avenue, Uyo",
    grade: "GL 12",
    step: 8,
    status: "due-for-promotion",
    promotionDue: true,
    timeOffDue: false,
    retirementDue: false,
    leaveBalance: 15,
    salaryGrade: "GL 12",
    emergencyContact: {
      name: "Mrs. Johnson",
      phone: "+234 803 123 4568",
      relationship: "Spouse"
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-06-23T00:00:00Z"
  },
  {
    id: "2",
    name: "Blessing Udoh",
    firstName: "Blessing",
    lastName: "Udoh",
    position: "Budget Officer",
    department: "Budget Implementation",
    employeeId: "AKS002",
    email: "blessing.udoh@aksgov.ng",
    phone: "+234 805 234 5678",
    phoneNumber: "+234 805 234 5678",
    dateOfEmployment: "2020-01-20",
    hireDate: "2020-01-20",
    dateOfBirth: "1990-12-10",
    gender: "Female",
    maritalStatus: "Single",
    address: "45 Aka Road, Uyo",
    grade: "GL 10",
    step: 5,
    status: "on-leave",
    promotionDue: false,
    timeOffDue: false,
    retirementDue: false,
    leaveBalance: 8,
    leaveStartDate: "2024-06-15",
    leaveEndDate: "2024-06-30",
    salaryGrade: "GL 10",
    emergencyContact: {
      name: "Mr. Udoh",
      phone: "+234 805 234 5679",
      relationship: "Father"
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-06-23T00:00:00Z"
  },
  {
    id: "3",
    name: "Emmanuel Okon",
    firstName: "Emmanuel",
    lastName: "Okon",
    position: "Director of Budget",
    department: "Administration",
    employeeId: "AKS003",
    email: "emmanuel.okon@aksgov.ng",
    phone: "+234 807 345 6789",
    phoneNumber: "+234 807 345 6789",
    dateOfEmployment: "1995-08-10",
    hireDate: "1995-08-10",
    dateOfBirth: "1965-03-18",
    gender: "Male",
    maritalStatus: "Married",
    address: "78 Government House Road, Uyo",
    grade: "GL 16",
    step: 12,
    status: "due-for-retirement",
    promotionDue: false,
    timeOffDue: false,
    retirementDue: true,
    leaveBalance: 22,
    retirementDate: "2025-03-18",
    salaryGrade: "GL 16",
    emergencyContact: {
      name: "Mrs. Okon",
      phone: "+234 807 345 6790",
      relationship: "Spouse"
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-06-23T00:00:00Z"
  },
  {
    id: "4",
    name: "Grace Akpan",
    firstName: "Grace",
    lastName: "Akpan",
    position: "Assistant Budget Officer",
    department: "Budget Monitoring",
    employeeId: "AKS004",
    email: "grace.akpan@aksgov.ng",
    phone: "+234 809 456 7890",
    phoneNumber: "+234 809 456 7890",
    dateOfEmployment: "2019-06-05",
    hireDate: "2019-06-05",
    dateOfBirth: "1992-09-25",
    gender: "Female",
    maritalStatus: "Married",
    address: "23 Ring Road, Uyo",
    grade: "GL 08",
    step: 3,
    status: "due-for-time-off",
    promotionDue: false,
    timeOffDue: true,
    retirementDue: false,
    leaveBalance: 25,
    salaryGrade: "GL 08",
    emergencyContact: {
      name: "Mr. Akpan",
      phone: "+234 809 456 7891",
      relationship: "Spouse"
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-06-23T00:00:00Z"
  },
  {
    id: "5",
    name: "Samuel Etim",
    firstName: "Samuel",
    lastName: "Etim",
    position: "Budget Clerk",
    department: "Data Management",
    employeeId: "AKS005",
    email: "samuel.etim@aksgov.ng",
    phone: "+234 811 567 8901",
    phoneNumber: "+234 811 567 8901",
    dateOfEmployment: "2021-02-14",
    hireDate: "2021-02-14",
    dateOfBirth: "1995-11-30",
    gender: "Male",
    maritalStatus: "Single",
    address: "67 Eket Road, Uyo",
    grade: "GL 06",
    step: 2,
    status: "active",
    promotionDue: false,
    timeOffDue: false,
    retirementDue: false,
    leaveBalance: 18,
    salaryGrade: "GL 06",
    emergencyContact: {
      name: "Mrs. Etim",
      phone: "+234 811 567 8902",
      relationship: "Mother"
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-06-23T00:00:00Z"
  },
  {
    id: "6",
    name: "Victoria Essien",
    firstName: "Victoria",
    lastName: "Essien",
    position: "Senior Accountant",
    department: "Finance",
    employeeId: "AKS006",
    email: "victoria.essien@aksgov.ng",
    phone: "+234 813 678 9012",
    phoneNumber: "+234 813 678 9012",
    dateOfEmployment: "2017-05-30",
    hireDate: "2017-05-30",
    dateOfBirth: "1988-04-14",
    gender: "Female",
    maritalStatus: "Married",
    address: "34 Oron Road, Uyo",
    grade: "GL 13",
    step: 6,
    status: "on-special-duty",
    promotionDue: false,
    timeOffDue: false,
    retirementDue: false,
    leaveBalance: 12,
    salaryGrade: "GL 13",
    emergencyContact: {
      name: "Mr. Essien",
      phone: "+234 813 678 9013",
      relationship: "Spouse"
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-06-23T00:00:00Z"
  },
  {
    id: "7",
    name: "David Umoh",
    firstName: "David",
    lastName: "Umoh",
    position: "Budget Coordinator",
    department: "Coordination",
    employeeId: "AKS007",
    email: "david.umoh@aksgov.ng",
    phone: "+234 815 789 0123",
    phoneNumber: "+234 815 789 0123",
    dateOfEmployment: "2016-11-12",
    hireDate: "2016-11-12",
    dateOfBirth: "1983-08-07",
    gender: "Male",
    maritalStatus: "Divorced",
    address: "89 Nwaniba Road, Uyo",
    grade: "GL 11",
    step: 9,
    status: "returning-from-leave",
    promotionDue: false,
    timeOffDue: false,
    retirementDue: false,
    leaveBalance: 5,
    leaveStartDate: "2024-06-01",
    leaveEndDate: "2024-06-25",
    salaryGrade: "GL 11",
    emergencyContact: {
      name: "Mrs. Umoh",
      phone: "+234 815 789 0124",
      relationship: "Sister"
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-06-23T00:00:00Z"
  },
  {
    id: "8",
    name: "Mary Bassey",
    firstName: "Mary",
    lastName: "Bassey",
    position: "Senior Budget Officer",
    department: "Policy Analysis",
    employeeId: "AKS008",
    email: "mary.bassey@aksgov.ng",
    phone: "+234 817 890 1234",
    phoneNumber: "+234 817 890 1234",
    dateOfEmployment: "2014-09-25",
    hireDate: "2014-09-25",
    dateOfBirth: "1980-01-12",
    gender: "Female",
    maritalStatus: "Married",
    address: "56 Ikot Ekpene Road, Uyo",
    grade: "GL 14",
    step: 10,
    status: "retired",
    promotionDue: false,
    timeOffDue: false,
    retirementDue: false,
    leaveBalance: 0,
    retirementDate: "2024-01-12",
    salaryGrade: "GL 14",
    emergencyContact: {
      name: "Mr. Bassey",
      phone: "+234 817 890 1235",
      relationship: "Spouse"
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-06-23T00:00:00Z"
  },
  {
    id: "9",
    name: "John Udo",
    firstName: "John",
    lastName: "Udo",
    position: "Assistant Director",
    department: "Strategic Planning",
    employeeId: "AKS009",
    email: "john.udo@aksgov.ng",
    phone: "+234 819 901 2345",
    phoneNumber: "+234 819 901 2345",
    dateOfEmployment: "2012-04-18",
    hireDate: "2012-04-18",
    dateOfBirth: "1975-06-29",
    gender: "Male",
    maritalStatus: "Married",
    address: "101 Abak Road, Uyo",
    grade: "GL 15",
    step: 11,
    status: "resigned",
    promotionDue: false,
    timeOffDue: false,
    retirementDue: false,
    leaveBalance: 0,
    salaryGrade: "GL 15",
    emergencyContact: {
      name: "Mrs. Udo",
      phone: "+234 819 901 2346",
      relationship: "Spouse"
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-06-23T00:00:00Z"
  },
  {
    id: "10",
    name: "Faith Williams",
    firstName: "Faith",
    lastName: "Williams",
    position: "Budget Analyst",
    department: "Research & Development",
    employeeId: "AKS010",
    email: "faith.williams@aksgov.ng",
    phone: "+234 821 012 3456",
    phoneNumber: "+234 821 012 3456",
    dateOfEmployment: "2022-07-01",
    hireDate: "2022-07-01",
    dateOfBirth: "1996-02-28",
    gender: "Female",
    maritalStatus: "Single",
    address: "25 Calabar Road, Uyo",
    grade: "GL 07",
    step: 1,
    status: "dismissed",
    promotionDue: false,
    timeOffDue: false,
    retirementDue: false,
    leaveBalance: 0,
    salaryGrade: "GL 07",
    emergencyContact: {
      name: "Mr. Williams",
      phone: "+234 821 012 3457",
      relationship: "Father"
    },
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-06-23T00:00:00Z"
  }
];

// Mock user data for authentication
export const mockUsers = [
  {
    id: "1",
    username: "admin",
    password: "password123",
    firstName: "System",
    lastName: "Administrator",
    email: "admin@aksgov.ng",
    role: "admin" as const,
    department: "IT",
    isActive: true
  },
  {
    id: "2",
    username: "budget.officer",
    password: "budget2024",
    firstName: "Budget",
    lastName: "Officer",
    email: "budget@aksgov.ng",
    role: "manager" as const,
    department: "Budget Office",
    isActive: true
  }
];

// Government offices data
export const governmentOffices = [
  {
    id: "budget-office",
    name: "Budget Office",
    status: "active",
    description: "State Budget Planning and Implementation",
    building: "Government House Complex"
  },
  {
    id: "finance-office",
    name: "Finance Office",
    status: "active",
    description: "Financial Management and Control",
    building: "Treasury House"
  },
  {
    id: "planning-office",
    name: "Planning Office",
    status: "active",
    description: "State Development Planning",
    building: "Planning Commission Building"
  },
  {
    id: "audit-office",
    name: "Audit Office",
    status: "active",
    description: "Internal Audit and Control",
    building: "Audit House"
  }
];