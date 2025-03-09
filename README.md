# tes-booking-system-v2

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## How to Login
To log in to the application, use the following account:

- **Username:** `sulhan`
- **Password:** `1234`

**Login steps:**
1. Open the application and make sure you are on the **Login** page.
2. Enter the appropriate **Username** and **Password**.
3. Click the **Login** button.
4. If successful, you will be directed to the **Home** page.
5. If failed, make sure the **username and password are correct**.

---

## How to Forgot Password
If you forget your password, you can reset it in the following way:

1. Open the **Login** page, then click **Forgot Password**.
2. Enter **email**: `sulhan@gmail.com` and click **Next**.
- If the email is wrong, an error will appear.
3. Enter the verification code **123456** sent to the email.
- If the code is wrong, an error will appear.
4. After the code is correct, enter **New Password** and **Confirm Password**.
- The password must have **letters and numbers**.
5. Click **Reset Password**.
6. If successful, you will be redirected to the **Login** page.

**All pages already have appropriate input validation.** ✅

---

## How to Change Profile
You can update your profile information via the **Profile** page.

**Steps to change profile:**
1. Click the **Profile** menu in the navbar.
2. Press the **Dropdown Profile button**.
3. Select **Edit Profile**, then you will be directed to the edit page.
4. Change information such as **Profile Photo, Name, Email, Job, Phone Number**.
5. Click the **Save Changes** button to save the changes.
6. Your profile will be **updated automatically** temporary.

---

## Book view
The booking page allows you to view a list of available villas and their status.

**Steps to make a booking:**
1. Open the **Booking** menu in the navbar.
2. You will see a list of villas and their status:
    - ✅ **Booked** → Already booked
    - ⏳ **Pending** → In process
    - 🟢 **Available** → Can be booked

**How ​​to filter:**
1. Use the **Month & Year** filter to search for villas based on a specific time.
2. Use the **Status** filter to view a list of villas that are **Booked, Pending, or Available**.
3. The list of villas will be updated according to the filters you select.

---
