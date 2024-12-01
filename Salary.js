//Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs 
//of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

//NB: Use KRA, NHIF, and NSSF values provided in the link below.
//- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.
//Links to an external site.-  Links to an external site.Links to an external site.
//- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/paye



function calculateNetSalary(basicSalary, benefits) {
    // thisare the Constants and thresholds
    const personalRelief = 2400; //this is the  Monthly personal relief
    const NHIF_RATES = [
        { max: 5999, rate: 150 },
        { max: 7999, rate: 300 },
        { max: 11999, rate: 400 },
        { max: 14999, rate: 500 },
        { max: 19999, rate: 600 },
        { max: 24999, rate: 750 },
        { max: 29999, rate: 850 },
        { max: 34999, rate: 900 },
        { max: 39999, rate: 950 },
        { max: 44999, rate: 1000 },
        { max: 49999, rate: 1100 },
        { max: 59999, rate: 1200 },
        { max: 69999, rate: 1300 },
        { max: 79999, rate: 1400 },
        { max: 89999, rate: 1500 },
        { max: 99999, rate: 1600 },
        { max: Infinity, rate: 1700 },
    ];
  
    //  how to Calculate Gross Salary
    const grossSalary = basicSalary + benefits;
  
    // Step number 1:how to  Calculate PAYE (Taxable Income)
    let taxableIncome = grossSalary;
  
    let PAYE = 0;
    if (taxableIncome <= 24000) {
        PAYE = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        PAYE = 24000 * 0.1 + (taxableIncome - 24000) * 0.25;
    } else if (taxableIncome <= 500000) {
        PAYE =
            24000 * 0.1 +
            (32333 - 24000) * 0.25 +
            (taxableIncome - 32333) * 0.3;
    } else if (taxableIncome <= 800000) {
        PAYE =
            24000 * 0.1 +
            (32333 - 24000) * 0.25 +
            (500000 - 32333) * 0.3 +
            (taxableIncome - 500000) * 0.325;
    } else {
        PAYE =
            24000 * 0.1 +
            (32333 - 24000) * 0.25 +
            (500000 - 32333) * 0.3 +
            (800000 - 500000) * 0.325 +
            (taxableIncome - 800000) * 0.35;
    }
    PAYE = Math.max(PAYE - personalRelief, 0); // Apply personal relief
  
    // Step number 2: how to Calculate NHIF (Fixed rates based on gross salary)
    let NHIF = 0;
    for (const { max, rate } of NHIF_RATES) {
        if (grossSalary <= max) {
            NHIF = rate;
            break;
        }
    }
  
    // Step number 3: how to Calculate NSSF Contributions (6% of pensionable pay)
    let nssfTier1 = Math.min(basicSalary, 7000) * 0.06;
    let nssfTier2 = Math.max(0, Math.min(basicSalary - 7000, 29000)) * 0.06;
    const NSSF = nssfTier1 + nssfTier2;
  
    // Step  number 4: how to Calculate Net Salary
    const totalDeductions = PAYE + NHIF + NSSF;
    const netSalary = grossSalary - totalDeductions;
  
    // Results
    return {
        grossSalary: grossSalary.toFixed(2),
        PAYE: PAYE.toFixed(2),
        NHIF: NHIF.toFixed(2),
        NSSF: NSSF.toFixed(2),
        netSalary: netSalary.toFixed(2),
    };
}
//this is an example i have tried
//const basicSalary = 1000000; 
//const benefits = 300000; 
  
//you can altatively test this using the prompt by (inputing the basic basicSalary and the benefits in the server ,eg JS.fidle)
//User Input
const basicSalary = parseFloat(prompt("Enter Basic Salary: "));
const benefits = parseFloat(prompt("Enter Benefits: "));

// this are  the results of the above example the i tried
const salaryDetails = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", salaryDetails.grossSalary);
console.log("PAYE:", salaryDetails.PAYE);
console.log("NHIF:", salaryDetails.NHIF);
console.log("NSSF:", salaryDetails.NSSF);
console.log("Net Salary:", salaryDetails.netSalary);

