import { z } from "zod";

export const formSchema =z.object({
    first_name: z
    .string({ required_error: "First Name is required." })
    .trim()
    .min(2),
    last_name: z
    .string({ required_error: "Last Name is required." })
    .trim()
    .min(2),
    dob: z
    .string({ required_error: "birth is required." }),
    country: z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    state: z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    city: z
    .string({ required_error: "City is required." })
    .trim()
    .min(2),
    smoker: z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    smoking_frequency: z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    home_owner: z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    property_type:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    home_value:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    has_security_system: z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    security_system_type:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    fire_safety:z
    .string({ required_error: " required." })
,
    street: z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    zip_code: z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    roadside_assistance: z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    desired_coverage:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    insurance_history:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    license_suspensions:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    accident_count:z
    .string({ required_error: " required." })
,
    insurance_coverage:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    car_owner:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    car_model:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    car_year:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    car_usage:z
    .string({ required_error: " required." })
    .trim()
    .min(2),
    accidents_last_5_year:z.string({ required_error: " required." })
    .trim()
    .min(2),
  });