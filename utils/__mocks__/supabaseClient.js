const mockUserData = {
  "id": "a0e2a772-d070-4bee-a31c-0bec060dc126",
  "aud": "authenticated",
  "role": "authenticated",
  "email": "matt@wingmatt.dev",
  "email_confirmed_at": "2022-05-17T03:34:34.520781Z",
  "phone": "",
  "confirmation_sent_at": "2022-05-17T03:34:20.11896Z",
  "confirmed_at": "2022-05-17T03:34:34.520781Z",
  "recovery_sent_at": "2022-06-07T14:51:07.373602Z",
  "last_sign_in_at": "2022-06-07T14:51:42.866587Z",
  "app_metadata": {
    "provider": "email",
    "providers": [
      "email"
    ]
  },
  "user_metadata": {},
  "identities": [
    {
      "id": "a0e2a772-d070-4bee-a31c-0bec060dc126",
      "user_id": "a0e2a772-d070-4bee-a31c-0bec060dc126",
      "identity_data": {
        "sub": "a0e2a772-d070-4bee-a31c-0bec060dc126"
      },
      "provider": "email",
      "last_sign_in_at": "2022-05-17T03:34:20.113347Z",
      "created_at": "2022-05-17T03:34:20.113396Z",
      "updated_at": "2022-05-17T03:34:20.1134Z"
    }
  ],
  "created_at": "2022-05-17T03:34:20.102672Z",
  "updated_at": "2022-06-07T14:51:42.868693Z"
}

const supabase = {
  auth: {
    user: () => {
      return mockUserData
    }
  }
}

export default supabase;