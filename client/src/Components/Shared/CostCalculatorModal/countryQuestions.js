// File: src/Components/Shared/CostCalculatorModal/countryQuestions.js

export const countryOptions = [
  { id: "uae", label: "United Arab Emirates" },
  { id: "ksa", label: "Saudi Arabia" },
  { id: "uk", label: "United Kingdom" },
  { id: "estonia", label: "Estonia" },
  { id: "usa", label: "United States" },
  { id: "bangladesh", label: "Bangladesh" },
];

// Each country maps to an array of "sections" (a wizard step).
// Each section has a title (used in the progress indicator) and fields.
// Field types: "single" (radio buttons), "multi" (checkboxes),
// "text", "number", "date", "time"
export const countryQuestions = {
  uae: [
    {
      title: "Location & Jurisdiction",
      fields: [
        {
          id: "uae_emirate",
          label: "Which emirate would you like to establish your business in?",
          type: "single",
          options: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah", "Umm Al Quwain", "Not sure"],
        },
        {
          id: "uae_jurisdiction_type",
          label: "Which type of jurisdiction do you prefer?",
          type: "single",
          options: ["Mainland", "Free zone", "Offshore", "Not sure—advice required"],
        },
        {
          id: "uae_preferred_authority",
          label: "Do you have a preferred free zone or licensing authority?",
          type: "single",
          options: ["Yes", "No", "Not sure"],
        },
        {
          id: "uae_preferred_authority_name",
          label: "If yes, please select or mention the preferred authority.",
          type: "text",
          showIf: (data) => data.uae_preferred_authority === "Yes",
        },
      ],
    },
    {
      title: "Business Activity",
      fields: [
        {
          id: "uae_main_activity",
          label: "What will be your main business activity?",
          type: "single",
          options: ["Professional services", "Consultancy", "General trading", "E-commerce", "Technology or software", "Marketing or media", "Real estate", "Construction", "Logistics", "Food and hospitality", "Healthcare", "Education", "Manufacturing", "Other"],
        },
        {
          id: "uae_activity_desc",
          label: "Please briefly describe your products or services.",
          type: "text",
        },
        {
          id: "uae_activity_count",
          label: "How many business activities would you like to include in the licence?",
          type: "single",
          options: ["One", "Two", "Three or more", "Not sure"],
        },
        {
          id: "uae_regulatory_approval",
          label: "Will your activity require external or regulatory approval?",
          type: "single",
          options: ["Yes", "No", "Not sure"],
        },
      ],
    },
    {
      title: "Ownership & Structure",
      fields: [
        { id: "uae_shareholder_count", label: "How many shareholders will the company have?", type: "number" },
        {
          id: "uae_shareholder_type",
          label: "Are the shareholders:",
          type: "single",
          options: ["Individuals", "Corporate entities", "Both individuals and corporate entities"],
        },
        { id: "uae_shareholder_nationalities", label: "What are the nationalities of the shareholders?", type: "text" },
        { id: "uae_manager_count", label: "How many managers or directors will the company have?", type: "number" },
        {
          id: "uae_branch_required",
          label: "Do you require a branch of an existing company?",
          type: "single",
          options: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Visa & Office Requirements",
      fields: [
        { id: "uae_owner_visas", label: "How many owner or investor visas are required?", type: "number" },
        { id: "uae_employee_visas", label: "How many employee visas are required?", type: "number" },
        {
          id: "uae_family_visas",
          label: "Will you require family or dependent visas?",
          type: "single",
          options: ["Yes", "No"],
        },
        {
          id: "uae_applicants_in_uae",
          label: "Are any applicants currently inside the UAE?",
          type: "single",
          options: ["Yes", "No"],
        },
        {
          id: "uae_office_type",
          label: "What type of office do you require?",
          type: "single",
          options: ["Registered address only", "Flexi-desk", "Shared office", "Dedicated office", "Retail shop", "Warehouse", "Industrial premises", "Not sure"],
        },
        {
          id: "uae_has_office",
          label: "Do you already have office premises in the UAE?",
          type: "single",
          options: ["Yes", "No"],
        },
      ],
    },
    {
      title: "Additional Services",
      fields: [
        { id: "uae_bank_assist", label: "Do you require business bank account opening assistance?", type: "single", options: ["Yes", "No"] },
        { id: "uae_vat", label: "Do you require VAT registration assistance?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "uae_corp_tax", label: "Do you require Corporate Tax registration assistance?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "uae_ongoing_compliance", label: "Do you require ongoing accounting and compliance support?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
  ],

  ksa: [
    {
      title: "Location & Business Setup",
      fields: [
        { id: "ksa_city", label: "Which city would you like to establish your business in?", type: "single", options: ["Riyadh", "Jeddah", "Dammam", "Khobar", "Makkah", "Madinah", "Other", "Not sure"] },
        { id: "ksa_entity_kind", label: "Are you establishing:", type: "single", options: ["A new Saudi company", "A branch of a foreign company", "A subsidiary of an existing company", "A regional headquarters", "A representative or technical office", "Not sure"] },
        { id: "ksa_foreign_ownership", label: "Will the company have foreign ownership?", type: "single", options: ["100% foreign-owned", "Jointly owned by foreign and Saudi shareholders", "Saudi-owned", "Not sure"] },
        { id: "ksa_has_parent_company", label: "Do you already have an overseas parent company?", type: "single", options: ["Yes", "No"] },
        { id: "ksa_parent_company_country", label: "If yes, in which country is the parent company registered?", type: "text", showIf: (d) => d.ksa_has_parent_company === "Yes" },
      ],
    },
    {
      title: "Business Activity & Licensing",
      fields: [
        { id: "ksa_main_activity", label: "What will be your main business activity?", type: "single", options: ["Consultancy", "Trading", "Contracting", "Technology", "E-commerce", "Manufacturing", "Logistics", "Professional services", "Food and hospitality", "Healthcare", "Education", "Real estate", "Other"] },
        { id: "ksa_activity_desc", label: "Please describe the proposed business activity.", type: "text" },
        { id: "ksa_misa_licence", label: "Do you require a MISA investment licence?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ksa_other_authority_approval", label: "Will the business require approval from another Saudi authority?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
    {
      title: "Ownership & Capital",
      fields: [
        { id: "ksa_shareholder_count", label: "How many shareholders will the company have?", type: "number" },
        { id: "ksa_shareholder_type", label: "Are the shareholders:", type: "single", options: ["Individuals", "Corporate entities", "Both"] },
        { id: "ksa_shareholder_nationalities", label: "What are the nationalities of the shareholders?", type: "text" },
        { id: "ksa_share_capital", label: "What is the proposed share capital?", type: "text", placeholder: "Amount, or 'Not sure'" },
        { id: "ksa_director_count", label: "How many directors or managers will the company have?", type: "number" },
      ],
    },
    {
      title: "Employment & Immigration",
      fields: [
        { id: "ksa_foreign_employees", label: "How many foreign employees are expected during the first year?", type: "number" },
        { id: "ksa_saudi_employees", label: "How many Saudi employees are expected during the first year?", type: "number" },
        { id: "ksa_gm_iqama", label: "Do you require a General Manager visa or Iqama?", type: "single", options: ["Yes", "No"] },
        { id: "ksa_employee_visas", label: "Do you require employee visas and Iqamas?", type: "single", options: ["Yes", "No"] },
        { id: "ksa_saudization", label: "Do you require support with Saudization planning?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
    {
      title: "Office, Registration & Services",
      fields: [
        { id: "ksa_office_type", label: "What type of premises do you require?", type: "single", options: ["Registered office", "Serviced office", "Commercial office", "Retail premises", "Warehouse", "Industrial premises", "Not sure"] },
        { id: "ksa_national_address", label: "Do you require National Address registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ksa_chamber_of_commerce", label: "Do you require Chamber of Commerce registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ksa_bank_account", label: "Do you require a Saudi business bank account?", type: "single", options: ["Yes", "No"] },
        { id: "ksa_vat", label: "Do you require VAT registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ksa_zakat_tax", label: "Do you require Zakat or Corporate Income Tax registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ksa_platforms", label: "Do you require support with Qiwa, GOSI, Mudad, Muqeem or Absher?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ksa_ongoing_compliance", label: "Do you require ongoing accounting and tax compliance support?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
  ],

  uk: [
    {
      title: "Company Setup",
      fields: [
        { id: "uk_entity_type", label: "What type of UK business would you like to establish?", type: "single", options: ["Private limited company", "Limited liability partnership", "Branch of an overseas company", "Sole trader", "Partnership", "Community Interest Company", "Not sure"] },
        { id: "uk_trade_immediately", label: "Will the company trade immediately after incorporation?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "uk_has_company_name", label: "Do you already have a preferred company name?", type: "single", options: ["Yes", "No"] },
        { id: "uk_company_name", label: "If yes, please enter the proposed company name.", type: "text", showIf: (d) => d.uk_has_company_name === "Yes" },
      ],
    },
    {
      title: "Business Activity",
      fields: [
        { id: "uk_main_activity", label: "What will be the main business activity?", type: "single", options: ["Professional services", "Consulting", "E-commerce", "Technology or software", "Construction", "Cleaning services", "Retail", "Hospitality", "Healthcare", "Property", "Logistics", "Other"] },
        { id: "uk_activity_desc", label: "Please briefly describe the business activities.", type: "text" },
      ],
    },
    {
      title: "Ownership & Management",
      fields: [
        { id: "uk_shareholder_count", label: "How many shareholders or members will the business have?", type: "number" },
        { id: "uk_director_count", label: "How many directors will the company have?", type: "number" },
        { id: "uk_corporate_shareholders", label: "Are any shareholders or directors corporate entities?", type: "single", options: ["Yes", "No"] },
        { id: "uk_residence_countries", label: "What are the countries of residence of the directors and shareholders?", type: "text" },
        { id: "uk_director_in_uk", label: "Will any director live in the UK?", type: "single", options: ["Yes", "No"] },
        { id: "uk_psc", label: "Will there be any Person with Significant Control other than the shareholders?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
    {
      title: "Address & Compliance",
      fields: [
        { id: "uk_registered_office", label: "Do you require a UK registered office address?", type: "single", options: ["Yes", "No"] },
        { id: "uk_director_service_address", label: "Do you require a director service address?", type: "single", options: ["Yes", "No"] },
        { id: "uk_identity_verification", label: "Do you require Companies House identity verification assistance?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "uk_corp_tax", label: "Do you require Corporation Tax registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "uk_vat", label: "Do you require VAT registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "uk_paye", label: "Do you require PAYE and payroll registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "uk_payroll_headcount", label: "How many employees will be on payroll?", type: "number", showIf: (d) => d.uk_paye === "Yes" },
        { id: "uk_ongoing_compliance", label: "Do you require ongoing bookkeeping, annual accounts and tax filing?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
  ],

  estonia: [
    {
      title: "Company & e-Residency",
      fields: [
        { id: "ee_entity_type", label: "What type of Estonian business would you like to establish?", type: "single", options: ["Private limited company, OÜ", "Branch of a foreign company", "Sole proprietor", "Not sure"] },
        { id: "ee_has_eresidency", label: "Do you already have an Estonian e-Residency card?", type: "single", options: ["Yes", "Application in progress", "No", "Not sure what e-Residency is"] },
        { id: "ee_founder_count", label: "How many founders or shareholders will the company have?", type: "number" },
        { id: "ee_all_have_eresidency", label: "Will all founders have e-Residency cards?", type: "single", options: ["Yes", "No", "Not applicable"] },
      ],
    },
    {
      title: "Business Activity",
      fields: [
        { id: "ee_main_activity", label: "What will be your main business activity?", type: "single", options: ["Consulting", "Technology or software", "E-commerce", "Digital services", "Trading", "Marketing", "Professional services", "Holding company", "Other"] },
        { id: "ee_activity_desc", label: "Please briefly describe your business activity.", type: "text" },
        { id: "ee_sells_to_eu", label: "Will the company sell goods or services to customers in the European Union?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ee_customer_type", label: "Will the company sell to individual consumers, businesses or both?", type: "single", options: ["Businesses only", "Consumers only", "Both"] },
      ],
    },
    {
      title: "Address, Contact Person & Tax",
      fields: [
        { id: "ee_legal_address", label: "Do you require an Estonian legal address?", type: "single", options: ["Yes", "No"] },
        { id: "ee_contact_person", label: "Do you require a licensed contact person in Estonia?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ee_emtak_code", label: "Do you require assistance selecting an EMTAK activity code?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ee_vat", label: "Do you require VAT registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ee_oss_ioss", label: "Do you require OSS or IOSS registration support?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ee_eori", label: "Do you require an EORI number for import or export?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "ee_bank_account", label: "Do you require assistance opening a bank or fintech account?", type: "single", options: ["Yes", "No"] },
        { id: "ee_ongoing_accounting", label: "Do you require monthly accounting and annual report filing?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
  ],

  usa: [
    {
      title: "State & Entity Selection",
      fields: [
        { id: "us_state", label: "Which US state would you like to register the business in?", type: "single", options: ["Delaware", "Wyoming", "Florida", "Texas", "California", "New York", "Other", "Not sure—advice required"] },
        { id: "us_entity_type", label: "What type of entity would you like to establish?", type: "single", options: ["Limited Liability Company", "C Corporation", "S Corporation", "Branch of a foreign company", "Not sure"] },
        { id: "us_operates_other_states", label: "Will the business physically operate in another US state?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "us_other_states_list", label: "If yes, which state or states?", type: "text", showIf: (d) => d.us_operates_other_states === "Yes" },
      ],
    },
    {
      title: "Business Activity",
      fields: [
        { id: "us_main_activity", label: "What will be your main business activity?", type: "single", options: ["Consulting", "E-commerce", "Technology or software", "Trading", "Professional services", "Real estate", "Holding company", "Marketing", "Other"] },
        { id: "us_activity_desc", label: "Please briefly describe your products or services.", type: "text" },
        { id: "us_sells_online", label: "Will the business sell products or services online?", type: "single", options: ["Yes", "No"] },
        { id: "us_multi_state_customers", label: "Will the business have customers in multiple US states?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
    {
      title: "Ownership & Management",
      fields: [
        { id: "us_owner_count", label: "How many owners or shareholders will the company have?", type: "number" },
        { id: "us_owner_residency", label: "Are the owners:", type: "single", options: ["US residents", "Non-US residents", "A combination of both"] },
        { id: "us_corporate_owners", label: "Are any owners corporate entities?", type: "single", options: ["Yes", "No"] },
        { id: "us_has_employees", label: "Will the company have US-based employees?", type: "single", options: ["Yes", "No"] },
        { id: "us_employee_count", label: "How many employees are expected during the first year?", type: "number", showIf: (d) => d.us_has_employees === "Yes" },
      ],
    },
    {
      title: "Registration & Compliance",
      fields: [
        { id: "us_registered_agent", label: "Do you require a registered agent?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "us_ein", label: "Do you require an Employer Identification Number?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "us_bank_account", label: "Do you require a US business bank account?", type: "single", options: ["Yes", "No"] },
        { id: "us_payment_gateway", label: "Do you require payment gateway support?", type: "single", options: ["Yes", "No"] },
        { id: "us_sales_tax", label: "Do you require sales tax registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "us_tax_filing", label: "Do you require federal and state tax filing support?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "us_bookkeeping_payroll", label: "Do you require bookkeeping and payroll services?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
  ],

  bangladesh: [
    {
      title: "Business Location & Structure",
      fields: [
        { id: "bd_city", label: "In which city or district would you like to establish the business?", type: "single", options: ["Dhaka", "Chattogram", "Sylhet", "Khulna", "Rajshahi", "Other"] },
        { id: "bd_entity_type", label: "What type of business would you like to establish?", type: "single", options: ["Private limited company", "Public limited company", "Branch office", "Liaison or representative office", "Partnership", "Sole proprietorship", "Not sure"] },
        { id: "bd_foreign_shareholders", label: "Will the business have foreign shareholders or investors?", type: "single", options: ["Yes", "No"] },
        { id: "bd_export_oriented", label: "Is the business an export-oriented or foreign-invested business?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
    {
      title: "Business Activity",
      fields: [
        { id: "bd_main_activity", label: "What will be the main business activity?", type: "single", options: ["Professional services", "Trading", "Manufacturing", "Technology", "E-commerce", "Export or import", "Construction", "Garments or textiles", "Healthcare", "Education", "Other"] },
        { id: "bd_activity_desc", label: "Please briefly describe your products or services.", type: "text" },
        { id: "bd_import_export", label: "Will the company import or export goods?", type: "single", options: ["Yes", "No"] },
        { id: "bd_industry_approvals", label: "Will the company require industry-specific approvals or licences?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
    {
      title: "Ownership & Capital",
      fields: [
        { id: "bd_shareholder_count", label: "How many shareholders or partners will the business have?", type: "number" },
        { id: "bd_shareholder_nationalities", label: "What are the nationalities of the shareholders?", type: "text" },
        { id: "bd_authorised_capital", label: "What is the proposed authorised capital?", type: "text" },
        { id: "bd_paid_up_capital", label: "What is the proposed paid-up capital?", type: "text" },
        { id: "bd_director_count", label: "How many directors will the company have?", type: "number" },
      ],
    },
    {
      title: "Registration & Compliance",
      fields: [
        { id: "bd_registered_office", label: "Do you require a registered office address?", type: "single", options: ["Yes", "No"] },
        { id: "bd_trade_licence", label: "Do you require trade licence support?", type: "single", options: ["Yes", "No"] },
        { id: "bd_tin", label: "Do you require Tax Identification Number registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "bd_vat_bin", label: "Do you require VAT or Business Identification Number registration?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "bd_irc_erc", label: "Do you require Import Registration Certificate or Export Registration Certificate support?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "bd_bida_bepza", label: "Do you require BIDA, BEPZA or other investment authority approval?", type: "single", options: ["Yes", "No", "Not sure"] },
        { id: "bd_bank_account", label: "Do you require bank account opening assistance?", type: "single", options: ["Yes", "No"] },
        { id: "bd_ongoing_support", label: "Do you require ongoing accounting, payroll, tax and audit support?", type: "single", options: ["Yes", "No", "Not sure"] },
      ],
    },
  ],
};

// Applies to every country, shown right after the country-specific sections
export const commonQuestions = {
  title: "Additional Services",
  fields: [
    { id: "common_start_time", label: "When would you like to start the business?", type: "single", options: ["Immediately", "Within one month", "Within one to three months", "Within three to six months", "Still exploring"] },
    { id: "common_revenue", label: "What is your estimated annual revenue?", type: "single", options: ["Below USD 100,000", "USD 100,000–500,000", "USD 500,001–1 million", "Above USD 1 million", "Not sure"] },
    { id: "common_transactions", label: "What is your estimated number of monthly transactions?", type: "single", options: ["Fewer than 50", "50–100", "101–250", "251–500", "More than 500", "Not sure"] },
    {
      id: "common_additional_services",
      label: "Which additional services do you require?",
      type: "multi",
      options: ["Business plan", "Financial projections", "Market-entry advisory", "Trademark registration", "Accounting software setup", "ERP implementation", "Payroll services", "Tax advisory", "CFO advisory", "Audit support", "Legal or compliance support", "None"],
    },
    { id: "common_additional_info", label: "Please provide any additional information or special requirements.", type: "text" },
  ],
};

// Final step before submission
export const contactFields = {
  title: "Contact Details",
  fields: [
    { id: "contact_full_name", label: "Full name", type: "text", required: true },
    { id: "contact_company_name", label: "Company name, if applicable", type: "text" },
    { id: "contact_email", label: "Email address", type: "text", required: true },
    { id: "contact_phone", label: "Contact number with country code", type: "text", required: true },
    { id: "contact_residence_country", label: "Current country of residence", type: "text" },
    { id: "contact_preferred_method", label: "Preferred contact method", type: "single", options: ["Email", "Phone", "WhatsApp", "Video meeting"] },
    { id: "contact_preferred_datetime", label: "Preferred consultation date and time", type: "text", placeholder: "e.g. Mon 28 July, 3:00 PM" },
    { id: "contact_referral_source", label: "How did you hear about De Tempête?", type: "text" },
  ],
};

export const progressBuckets = [
  "Country",
  "Business Details",
  "Ownership",
  "Visa & Office",
  "Additional Services",
  "Contact Details",
];