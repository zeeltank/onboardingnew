/**
 * Edit Employee Page Tour Steps - Complete Field-by-Field Tour
 * Covers ALL form fields with proper targeting
 */

export const editEmployeeTourSteps = [
  // ========== WELCOME ==========
  {
    id: 'welcome',
    attachTo: { element: '#edit-employee-header', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 500));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: { enabled: true },
    title: 'Welcome to Edit Employee',
    text: 'This page manages complete employee information with 7 tabs. Each tab has specific form fields. This tour will guide you through EVERY field. Let\'s start!'
  },

  // ========== BACK BUTTON ==========
  {
    id: 'back-button',
    attachTo: { element: '#edit-employee-back', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Back Button',
    text: 'Click here to return to Employee Directory. Unsaved changes will be lost.'
  },

  // ========== PERSONAL INFO TAB ==========
  {
    id: 'tab-personal-info',
    attachTo: { element: '#tab-personal-info', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-personal-info');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 600);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Personal Information Tab',
    text: 'This main tab has 5 sections in sidebar: Personal Details, Address, Reporting, Attendance, Direct Deposit. Click sidebar items to navigate.'
  },

  // PROFILE HEADER
  {
    id: 'profile-header',
    attachTo: { element: '#pd-header', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'start' },
    cancelIcon: { enabled: true },
    title: 'Employee Profile Header',
    text: 'Shows employee photo (circular), full name in bold, and job role title. Photo can be changed via User Image field below.'
  },

  // SIDEBAR
  {
    id: 'sidebar-menu',
    attachTo: { element: '#pd-sidebar', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Form Sidebar Navigation',
    text: '5 sections: 1) Personal - name/email/phone 2) Address 3) Reporting 4) Attendance-work days/shifts 5) Deposit-bank details. Click each to view.'
  },

  // SUFFIX
  {
    id: 'field-suffix',
    attachTo: { element: '#field-suffix', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Suffix',
    text: 'Select honorific: Mr., Mrs., Ms., or Dr. Optional field displayed before name.'
  },

  // FIRST NAME
  {
    id: 'field-firstname',
    attachTo: { element: '#field-firstname', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: First Name',
    text: 'Enter employee\'s first name. This is a REQUIRED field. Used throughout the system for display.'
  },

  // MIDDLE NAME
  {
    id: 'field-middlename',
    attachTo: { element: '#field-middlename', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Middle Name',
    text: 'Enter middle name or leave blank. Optional field.'
  },

  // LAST NAME
  {
    id: 'field-lastname',
    attachTo: { element: '#field-lastname', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Last Name',
    text: 'Enter employee\'s last name. REQUIRED field. Combined with first name for full display.'
  },

  // EMAIL
  {
    id: 'field-email',
    attachTo: { element: '#field-email', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Email Address',
    text: 'Enter valid email address. REQUIRED. Used for login and official communications. Format: name@domain.com'
  },

  // PASSWORD
  {
    id: 'field-password',
    attachTo: { element: '#field-password', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Password',
    text: 'Set or change login password. Click eye icon to show/hide. Minimum 6 characters recommended.'
  },

  // BIRTHDATE
  {
    id: 'field-birthdate',
    attachTo: { element: '#field-birthdate', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Birthdate',
    text: 'Select employee\'s date of birth using the date picker. Optional field.'
  },

  // MOBILE
  {
    id: 'field-mobile',
    attachTo: { element: '#field-mobile', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Mobile Number',
    text: 'Enter 10-digit mobile number. Used for SMS notifications and contact. Optional but recommended.'
  },

  // DEPARTMENT
  {
    id: 'field-department',
    attachTo: { element: '#field-department', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Department',
    text: 'Select employee\'s department from dropdown. REQUIRED. Job role dropdown updates based on selection. Admin users can modify.'
  },

  // JOB ROLE
  {
    id: 'field-jobrole',
    attachTo: { element: '#field-jobrole', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Job Role',
    text: 'Select position/job role. List shows roles available in chosen department. REQUIRED. Determines assigned skills and tasks.'
  },

  // RESPONSIBILITY LEVEL
  {
    id: 'field-responsibility',
    attachTo: { element: '#field-responsibility', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Responsibility Level',
    text: 'Select Level of Responsibility (LOR). Maps to competency framework. Defines expected skill levels. Higher = more experience needed.'
  },

  // GENDER
  {
    id: 'field-gender',
    attachTo: { element: '#field-gender', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Gender',
    text: 'Select Male or Female using radio buttons. Used for official records and reporting.'
  },

  // USER PROFILE
  {
    id: 'field-userprofile',
    attachTo: { element: '#field-userprofile', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: User Profile',
    text: 'Select access level: Admin, Manager, Employee, etc. Determines system permissions and features available to user.'
  },

  // JOINING YEAR
  {
    id: 'field-joiningyear',
    attachTo: { element: '#field-joiningyear', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Joining Year',
    text: 'Enter year employee joined organization (e.g., 2023). Used for tenure calculation and reports.'
  },

  // STATUS
  {
    id: 'field-status',
    attachTo: { element: '#field-status', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Status',
    text: 'Set account status: Active (employee currently working) or In-Active (former employee). Required.'
  },

  // USER IMAGE
  {
    id: 'field-userimage',
    attachTo: { element: '#field-userimage', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: User Image',
    text: 'Click Choose File to upload profile photo. Supported: JPG, PNG. Preview shows after upload. Click X to remove.'
  },

  // SUBMIT BUTTON
  {
    id: 'submit-button',
    attachTo: { element: '#pd-submit-btn', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Save Button',
    text: 'Click "Update" to save all changes. Shows "Updating..." during save. Success message appears after. Always save changes!'
  },

  // ========== ADDRESS SECTION ==========
  {
    id: 'tab-address',
    attachTo: { element: '#pd-tab-address', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#pd-tab-address');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Address Section',
    text: 'Click "Address" in sidebar to view address form fields.'
  },

  {
    id: 'field-address',
    attachTo: { element: '#field-address', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Address',
    text: 'Enter residential street address. Line 1 of address. Optional but recommended for official records.'
  },

  {
    id: 'field-city',
    attachTo: { element: '#field-city', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: City',
    text: 'Enter city name. Part of address for mailing and official records.'
  },

  {
    id: 'field-state',
    attachTo: { element: '#field-state', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: State',
    text: 'Enter state or region. Required for complete address.'
  },

  {
    id: 'field-pincode',
    attachTo: { element: '#field-pincode', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Pincode',
    text: 'Enter postal/zip code. 6 digits for India. Used for address verification and mail.'
  },

  // ========== REPORTING SECTION ==========
  {
    id: 'tab-reporting',
    attachTo: { element: '#pd-tab-reporting', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#pd-tab-reporting');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Reporting Section',
    text: 'Click "Reporting" in sidebar to view reporting hierarchy form.'
  },

  {
    id: 'field-supervisor',
    attachTo: { element: '#field-supervisor', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Supervisor/Subordinate',
    text: 'Select relationship type: Supervisor (this employee reports to someone) or Subordinate (someone reports to this employee).'
  },

  {
    id: 'field-employeename',
    attachTo: { element: '#field-employeename', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Employee Name',
    text: 'Select the employee (supervisor or subordinate) from the dropdown. List shows all employees in system.'
  },

  {
    id: 'field-reportingmethod',
    attachTo: { element: '#field-reportingmethod', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Reporting Method',
    text: 'Select Direct (immediate supervisor) or Indirect (skip-level manager). Defines reporting hierarchy.'
  },

  // ========== ATTENDANCE SECTION ==========
  {
    id: 'tab-attendance',
    attachTo: { element: '#pd-tab-attendance', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#pd-tab-attendance');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Attendance Section',
    text: 'Click "Attendance" in sidebar to set work schedule and shift times.'
  },

  {
    id: 'field-workingdays',
    attachTo: { element: '#field-workingdays', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Working Days',
    text: 'Check days employee works: Mon, Tue, Wed, Thu, Fri, Sat. Default: Mon-Fri. Unchecked = day off.'
  },

  // ========== DEPOSIT SECTION ==========
  {
    id: 'tab-deposit',
    attachTo: { element: '#pd-tab-deposit', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#pd-tab-deposit');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Direct Deposit Section',
    text: 'Click "Direct Deposit" in sidebar for salary bank details.'
  },

  {
    id: 'field-bankname',
    attachTo: { element: '#field-bankname', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Bank Name',
    text: 'Enter bank name where salary will be credited (e.g., HDFC Bank, State Bank). Required for salary transfer.'
  },

  {
    id: 'field-branchname',
    attachTo: { element: '#field-branchname', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Branch Name',
    text: 'Enter bank branch name/location. Helps with verification.'
  },

  {
    id: 'field-account',
    attachTo: { element: '#field-account', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Account Number',
    text: 'Enter bank account number. MUST be correct for salary credit. Verify twice!'
  },

  {
    id: 'field-ifsc',
    attachTo: { element: '#field-ifsc', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: IFSC Code',
    text: 'Enter IFSC (Indian Financial System Code) - 11 characters. Identifies bank branch uniquely. Required for NEFT/RTGS.'
  },

  {
    id: 'field-amount',
    attachTo: { element: '#field-amount', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Amount',
    text: 'Enter salary amount to transfer. Optional - may use payroll system instead.'
  },

  {
    id: 'field-transfertype',
    attachTo: { element: '#field-transfertype', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Field: Transfer Type',
    text: 'Select Direct (to employee account) or Indirect (through other channel). Usually Direct.'
  },

  // ========== UPLOAD DOCUMENT TAB - DETAILED ==========
  {
    id: 'tab-upload-docs',
    attachTo: { element: '#tab-upload-docs', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-upload-docs');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 600);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Upload Document Tab',
    text: 'This tab manages employee documents: ID proofs, certificates, resume, photos. Has upload form at top and document list below.'
  },

  {
    id: 'upload-doc-header',
    attachTo: { element: '#upload-doc-container', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'start' },
    cancelIcon: { enabled: true },
    title: 'Upload Document Page Header',
    text: '"Upload Document" title. This page has upload form (3 fields) and uploaded documents table below.'
  },

  {
    id: 'doc-type-field',
    attachTo: { element: '#doc-type-field', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Document Type Dropdown',
    text: 'REQUIRED. Select document type: Profile Photo, ID Proof (Aadhar/PAN), Education Certificate, Resume, Offer Letter, Other. Each type serves different purpose.'
  },

  {
    id: 'doc-title-field',
    attachTo: { element: '#doc-title-field', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Document Title Input',
    text: 'REQUIRED. Enter descriptive title for document (e.g., "Aadhar Card - John Doe", "Resume 2024"). Helps identify document later.'
  },

  {
    id: 'doc-file-field',
    attachTo: { element: '#doc-file-field', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'File Upload Button',
    text: 'REQUIRED. Click to browse and select file. Supports: PDF, DOC, DOCX, TXT. Max size typically 5MB. File icon shown in input.'
  },

  {
    id: 'upload-submit-btn',
    attachTo: { element: '#upload-submit-btn', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Upload Submit Button',
    text: 'Click "Submit" to upload document. Button shows "Uploading..." during process. All 3 fields required before upload works.'
  },

  {
    id: 'docs-table-header',
    attachTo: { element: '#docs-table-header', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Uploaded Documents Table',
    text: 'Table shows all uploaded documents with: Document Type, Title, and Filename columns. Click filename to view/download from cloud.'
  },

  // ========== OTHER TABS ==========
  {
    id: 'tab-jobrole-skill',
    attachTo: { element: '#tab-jobrole-skill', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-jobrole-skill');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 600);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Job Role Skills Tab',
    text: 'Shows skills assigned to employee\'s job role in hexagon grid. Click any skill to view Knowledge, Ability, Behavior, Attitude details.'
  },

  // ========== JOB ROLE SKILLS - HEXAGON GRID ==========
  {
    id: 'skills-honeycomb-grid',
    attachTo: { element: '#skills-honeycomb', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Skills Hexagon Grid',
    text: 'This honeycomb grid shows all skills required for this job role. Each hexagon represents a skill. Blue hexagons are required, gray are optional.'
  },

  {
    id: 'skill-hexagon-item',
    attachTo: { element: '#skill-hex-0', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Individual Skill Hexagon',
    text: 'Click any skill hexagon to view detailed components: Knowledge, Ability, Behavior, and Attitude. The expand icon shows skill details.'
  },

  // ========== SKILL DETAIL VIEW (JobroleNew Component) ==========
  {
    id: 'skill-detail-back-button',
    attachTo: { element: '#skill-detail-back-button', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 500));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'start' },
    cancelIcon: { enabled: true },
    title: 'Back to Skills',
    text: 'Click "Back to Skills" to return to the hexagon grid and view other skills. Use this to navigate between different skill details.'
  },

  {
    id: 'skill-detail-header',
    attachTo: { element: '#skill-detail-header', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'start' },
    cancelIcon: { enabled: true },
    title: 'Skill Detail Header',
    text: 'Shows "Skill" as page title. The active skill name is displayed below in the sidebar list. This is the detailed view of a selected skill.'
  },

  {
    id: 'skill-sidebar-list',
    attachTo: { element: '#skills-sidebar-list', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Skills Sidebar List',
    text: 'List of all skills in this job role. Click any skill to view its details on the right. Blue highlighted skill is currently selected. Hover to see full name.'
  },

  {
    id: 'skill-knowledge-section',
    attachTo: { element: '#skill-knowledge-section', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Knowledge Section',
    text: 'Knowledge: Technical expertise and information the employee needs for this skill. Shows as blue cards with knowledge items. Examples: coding languages, tools, methods.'
  },

  {
    id: 'skill-ability-section',
    attachTo: { element: '#skill-ability-section', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Ability Section',
    text: 'Ability: Demonstrated capability to perform tasks. Shows as gradient cards (green/teal). Examples: problem-solving, analytical thinking, communication.'
  },

  {
    id: 'skill-behaviour-section',
    attachTo: { element: '#skill-behaviour-section', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Behaviour Section',
    text: 'Behaviour: Observable actions and conduct required for this skill. Shows work behaviors, interpersonal skills, professional conduct expectations.'
  },

  {
    id: 'skill-attitude-section',
    attachTo: { element: '#skill-attitude-section', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => setTimeout(resolve, 300));
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Attitude Section',
    text: 'Attitude: Mental disposition and mindset needed. Shows professional attitudes like positivity, adaptability, growth mindset, customer focus.'
  },

  // ========== JOB ROLE TASKS TAB ==========
  {
    id: 'jobrole-tasks-bubbles-grid',
    attachTo: { element: '#tasks-bubbles-grid', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        // First click the tab to switch to jobrole-tasks
        const tabBtn = document.querySelector('#tab-jobrole-tasks');
        if (tabBtn) tabBtn.click();
        // Wait for component to render
        setTimeout(() => {
          const tasksGrid = document.querySelector('#tasks-bubbles-grid');
          if (tasksGrid) {
            resolve();
          } else {
            setTimeout(resolve, 800);
          }
        }, 600);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Tasks Bubbles Grid',
    text: 'Shows all job role tasks organized in cards. Each card represents a Critical Work Function with related task bubbles. Tasks are color-coded by priority.'
  },

  {
    id: 'jobrole-task-card',
    attachTo: { element: '#task-card-0', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        // Ensure we're on the jobrole-tasks tab
        const tabBtn = document.querySelector('#tab-jobrole-tasks');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Task Card',
    text: 'Each card shows a Critical Work Function - a major area of responsibility. Cards are sorted by number of tasks (fewer tasks shown first).'
  },

  {
    id: 'jobrole-task-bubbles',
    attachTo: { element: '#task-card-0-bubbles', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-jobrole-tasks');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Task Bubbles',
    text: 'Circular bubbles represent individual tasks. Bubble size indicates task complexity/importance. Hover over a bubble to see full task details in tooltip.'
  },

  {
    id: 'jobrole-task-bubble-item',
    attachTo: { element: '#task-card-0-bubble-0', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-jobrole-tasks');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Individual Task Bubble',
    text: 'Click on a task bubble to view or edit that specific task. Shows task name. Hover to see full description in popup tooltip.'
  },

  {
    id: 'jobrole-task-card-header',
    attachTo: { element: '#task-card-0-header', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-jobrole-tasks');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Task Card Header',
    text: 'Card header shows Critical Work Function title and icon. Below is the function description. All tasks in this bubble belong to this work area.'
  },

  // ========== LEVEL OF RESPONSIBILITY TAB ==========
  {
    id: 'lor-tabs-container',
    attachTo: { element: '#lor-tabs-container', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        // First click the tab to switch to responsibility
        const tabBtn = document.querySelector('#tab-responsibility');
        if (tabBtn) tabBtn.click();
        // Wait for component to render
        setTimeout(() => {
          const lorContainer = document.querySelector('#lor-tabs-container');
          if (lorContainer) {
            resolve();
          } else {
            setTimeout(resolve, 800);
          }
        }, 600);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'start' },
    cancelIcon: { enabled: true },
    title: 'LOR Tabs Container',
    text: 'This page shows Level of Responsibility framework. Three tabs: Description, Responsibility Attributes, Business Skills. Click tabs to switch views.'
  },

  {
    id: 'lor-tab-description',
    attachTo: { element: '#lor-tab-description', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        // Click responsibility tab first, then click the description sub-tab
        const tabBtn = document.querySelector('#tab-responsibility');
        if (tabBtn) tabBtn.click();
        setTimeout(() => {
          const descTab = document.querySelector('#lor-tab-description');
          if (descTab) descTab.click();
          setTimeout(resolve, 400);
        }, 400);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Description Tab',
    text: 'First tab shows level description and guidance notes. Two cards display: 1) Essence Level - core definition, 2) Guidance Notes - additional context.'
  },

  {
    id: 'lor-description-section',
    attachTo: { element: '#lor-description-section', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-responsibility');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Description Cards',
    text: 'Two description cards show: 1) Essence Level - brief definition of this responsibility level, 2) Guidance Notes - detailed explanation and examples.'
  },

  {
    id: 'lor-level-badge',
    attachTo: { element: '#lor-level-badge', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-responsibility');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'start' },
    cancelIcon: { enabled: true },
    title: 'Level Badge',
    text: 'Shows current responsibility level (1-7) with guiding phrase. Always visible at top. Blue gradient badge indicates level and expected competency.'
  },

  {
    id: 'lor-tab-responsibility',
    attachTo: { element: '#lor-tab-responsibility', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-responsibility');
        if (tabBtn) tabBtn.click();
        setTimeout(() => {
          const respTab = document.querySelector('#lor-tab-responsibility');
          if (respTab) respTab.click();
          setTimeout(resolve, 400);
        }, 400);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Responsibility Attributes Tab',
    text: 'Second tab shows responsibility attributes - key competencies for this level. Cards display attribute name and overall description. Click to expand.'
  },

  {
    id: 'lor-responsibility-section',
    attachTo: { element: '#lor-responsibility-section', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-responsibility');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Responsibility Attributes Cards',
    text: 'Grid of attribute cards. Each shows: attribute name (blue badge) and detailed description. Attributes define expected responsibilities at this level.'
  },

  {
    id: 'lor-tab-business',
    attachTo: { element: '#lor-tab-business', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-responsibility');
        if (tabBtn) tabBtn.click();
        setTimeout(() => {
          const bizTab = document.querySelector('#lor-tab-business');
          if (bizTab) bizTab.click();
          setTimeout(resolve, 400);
        }, 400);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Business Skills Tab',
    text: 'Third tab shows Business Skills and Behavioral Factors. These are soft skills and behaviors expected at this responsibility level.'
  },

  {
    id: 'lor-business-section',
    attachTo: { element: '#lor-business-section', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-responsibility');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Business Skills Cards',
    text: 'Three-column grid of skill cards. Each shows skill name and description. These behavioral factors are essential for success at this level.'
  },

  // ========== SKILL RATING TAB ==========
  {
    id: 'skill-rating-icons',
    attachTo: { element: '#skill-rating-icons', on: 'left' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        // First click the tab to switch to skill-rating
        const tabBtn = document.querySelector('#tab-skill-rating');
        if (tabBtn) tabBtn.click();
        // Wait for component to render
        setTimeout(() => {
          const ratingIcons = document.querySelector('#skill-rating-icons');
          if (ratingIcons) {
            resolve();
          } else {
            setTimeout(resolve, 800);
          }
        }, 600);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'start' },
    cancelIcon: { enabled: true },
    title: 'Skill Rating View Options',
    text: 'Three icons: Star (default view), Chart (admin rating), Settings (jobrole design). Click icons to switch between rating views.'
  },

  {
    id: 'skill-rating-left-panel',
    attachTo: { element: '#skill-rating-left-panel', on: 'right' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-skill-rating');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Skills List Sidebar',
    text: 'Left panel shows all job role skills. Click any skill to rate it. Blue = selected, Green = rated, Gray = unrated. Checkmark shows KAAB details completed.'
  },

  {
    id: 'skill-rating-question',
    attachTo: { element: '#skill-rating-question', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-skill-rating');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Skill Proficiency Question',
    text: 'Question asks if you are proficient in the selected skill. Click the (i) icon to view skill details (jobrole, category, description).'
  },

  {
    id: 'skill-level-buttons',
    attachTo: { element: '#skill-level-0', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-skill-rating');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Proficiency Level Buttons',
    text: 'Rate skill from 1-7 levels. Click a number to select. Each level has color: 1=Blue, 2=Green, 3=Yellow, 4=Orange, 5=Red. Level descriptions shown below when selected.'
  },

  {
    id: 'skill-rating-details',
    attachTo: { element: '#skill-rating-details', on: 'top' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-skill-rating');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Detailed Rating Toggle',
    text: 'Enable detailed rating with toggle switch. Requires proficiency level selected first. Shows Knowledge, Ability, Behaviour, Attitude tabs for granular rating.'
  },

  {
    id: 'skill-rating-tabs',
    attachTo: { element: '#skill-rating-tabs', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-skill-rating');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'KAAB Rating Tabs',
    text: 'Four tabs: Knowledge, Ability, Behaviour, Attitude. Click each to rate specific competencies. Use checkmark (yes) or X (no) for each item.'
  },

  {
    id: 'skill-rating-actions',
    attachTo: { element: '#skill-rating-actions', on: 'left' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-skill-rating');
        if (tabBtn) tabBtn.click();
        setTimeout(() => resolve(), 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Save Actions',
    text: 'Two buttons: Clear Rated (reset all ratings), Validate & Save All (submit all ratings). Shows count of rated skills. Click Save after rating all skills.'
  },

  {
    id: 'tab-jobrole-tasks',
    attachTo: { element: '#tab-jobrole-tasks', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-jobrole-tasks');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 600);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Job Role Tasks Tab',
    text: 'Displays all tasks for this employee\'s job role. Shows: Title, Description, Due Date, Priority, Status. Track task completion here.'
  },

  {
    id: 'tab-responsibility',
    attachTo: { element: '#tab-responsibility', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-responsibility');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 600);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Level of Responsibility Tab',
    text: 'Shows responsibility framework with areas, descriptions, and levels (1-5). Used for performance reviews and career planning.'
  },

  {
    id: 'tab-skill-rating',
    attachTo: { element: '#tab-skill-rating', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-skill-rating');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 600);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Skill Rating Tab',
    text: 'Rate employee skills 1-5 stars. Self-assessment and manager assessment. Add evidence/comments. Compare ratings over time.'
  },

  {
    id: 'tab-competency',
    attachTo: { element: '#tab-Jobrole-Type', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-Jobrole-Type');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 600);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: { behavior: 'smooth', block: 'center' },
    cancelIcon: { enabled: true },
    title: 'Expected Competency Tab',
    text: 'Radar chart shows competency analysis. Current vs Expected levels across Ability, Behavior, Attitude, Knowledge. Gap analysis for training.'
  },

  // ========== COMPLETE ==========
  {
    id: 'tour-complete',
    attachTo: { element: '#edit-employee-header', on: 'bottom' },
    beforeShowPromise: function() {
      return new Promise(resolve => {
        const tabBtn = document.querySelector('#tab-personal-info');
        if (tabBtn) tabBtn.click();
        setTimeout(resolve, 500);
      });
    },
    buttons: [],
    highlightClass: 'highlight',
    scrollTo: false,
    cancelIcon: { enabled: true },
    title: 'Tour Complete!',
    text: 'You now know ALL fields in Edit Employee page! Key reminders: 1) Required fields marked, 2) Save with Update button, 3) Use sidebar to switch sections, 4) Profile photo shows in header. Click Finish!'
  }
];

export default editEmployeeTourSteps;
