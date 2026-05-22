const { z } = require('zod');

const employeeSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.email({ message: "Invalid email address" }),
  phone: z.string().trim().min(1, 'Phone is required'),
  position: z.string().trim().min(1, 'Position is required'),
  salary: z
    .union([z.string(), z.number()])
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), 'Salary must be a number'),
  password: z.string().trim().min(6, 'Password must be at least 6 characters long'),
});

module.exports = { employeeSchema };
