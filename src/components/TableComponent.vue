<template>
  <div>
    <div class="q-pa-md">
    <q-table
      title="Treats"
      :rows="rows"
      :columns="columns"
      row-key="name"
    />
  </div>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '@/interfaces/pokemon.interface';
import { useGetPokemon } from '@/services/useGetPokemon';

const { data } = useGetPokemon()

const rows = data.value?.data.results || []

const columns = [
  {
    name: "name",
    label: "Nombre",
    align: "left" as const,
    field: (row: Pokemon) => row.name,
    format: (val: string)=> `${val}`,
    sortable: true
  },
  { name: "url", align: "center" as const, label: "URL", field: (row: Pokemon) => row.url, format: (val: string)=> `${val}`, sortable: true }
]
</script>
