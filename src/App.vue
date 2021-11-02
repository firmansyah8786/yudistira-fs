<template>
  <router-view />
</template>
<style>
    .dark-bg{
        background-color: #1D3557;
        color: #A8DADC;
    }
    .dark-bg a{
        color: #A8DADC;
        font-weight: bold;
    }
    .light-bg{
        background-color: #F1FAEE;
        color: #1D3557;
    }
    .light-bg a{
        color: #1D3557;
        font-weight: bold;
    }
    .bdr-light{
        border: 1px solid #A8DADC;
    }
    .justify-center {
        display: flex;
        justify-content: center;
    }
    .column {
        display: flex;
        flex-direction: column;
    }
    .wrap {
        display: flex;
        flex-wrap: wrap;
    }
    @media (max-width: 799px) {
        .text-block{
            padding: 1.5rem 10%;
        }
    }
    @media (min-width:800px) and (max-width: 1199px) {
        .text-block{
            padding: 1.5rem 15%;
        }
    }
    @media (min-width: 1200px) {
        .text-block{
            padding: 1.5rem 20%;
        }
    }
</style>