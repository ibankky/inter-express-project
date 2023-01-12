<template>
  <div>
    <div>
      <button type="button" class="btn btn-primary" @click="loadUsers">
        Fetch users
      </button>
    </div>
    <div>
      <pre>{{ users }}</pre>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { userApi } from '@/api/user'

export default defineComponent({
  setup() {
    const { fetchUsers } = userApi()
    const users = ref([])

    const loadUsers = async () => {
      const res = await fetchUsers()
      users.value = res.data
    }

    return {
      users,
      loadUsers,
    }
  },
})
</script>