<template>
  <div id="message">
    <h2>404 ERROR</h2>
    <h1>Page Not Found</h1>
    <p>
      The specified file was not found on this website. Please check the URL for
      mistakes and try again.
    </p>
  </div>
</template>

<style scoped>
#message { 
  background: white; 
  max-width: 360px; 
  margin: 10px auto 16px; 
  padding: 32px 24px 16px; 
}
#message h3 { 
  color: #888; 
  font-weight: normal; 
  font-size: 16px; 
  margin: 16px 0 12px; 
}
#message h2 { 
  color: #ffa100; 
  font-weight: bold; 
  font-size: 16px; 
  margin: 0 0 8px; 
}
#message h1 { 
  font-size: 22px; 
  font-weight: 300; 
  color: rgba(0,0,0,0.6); 
  margin: 0 0 16px;
}
#message p { 
  line-height: 140%; 
  margin: 16px 0 24px; 
  font-size: 14px; 
}
</style>
