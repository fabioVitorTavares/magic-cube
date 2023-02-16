t1 = int(input()) # Entrada do tamanho do vetor 1
t2 = int(input()) # Entrada do tamanho do vetor 2

v1 = input().split(' ') # Entrada dos valores do vetor 1
v2 = input().split(' ') # Entrada dos valores do vetor 2

resposta = [] # Vetor que vai guardar as sequencias que se repetem

i = 0 # Iterador para controloar as posições no vetor 1
j = 0 # Iterador para controloar as posições no vetor 2

while i < t1 - 1: # Percorre o vetor 1 da posição 0 até a penultima
  j = 0 # Zera o iterador do vetor 2 para percorrelo novamente
  while j < t2 - 1: # Percorre o vetor 2 da posição 0 até a penultima
    if v1[i] == v2[j]: # Se a posição no vetor 1 for igual a posição do vetor 2, entra nesse if
      k = 1 # Variavel para controlar o tamanho da sequencia caso ela exista
      if v1[i+k] == v2[j+k]: # Se a posicao proximo a atual nos dois vetores são iguais então temos uma sequencia
        seq = [v1[i]] # Adiciono a posição atual na sequencia
        while (i+k < t1)  and (j+k < t2) and (v1[i+k] == v2[j+k]): # Enquanto conseguir percorrer um dos dois vetores e as posições forem iguais, vai adicionando na sequencia         
          seq.append(v1[i+k]) # Adiciona o valor na sequencia temporaria
          k+=1 # Avança uma posição na verificação da sequencia
        i = i+k-1 # Continua percorrendo o vetor 1 a partir do final da seuqencia encontrada
        j = j+k-1 # Continua percorrendo o vetor 1 a partir do final da seuqencia encontrada
        resposta.append(seq) # Adiciona a sequencia parcial em Respostas que é um vetor de vetores [ [], [], [], [] ]
    j+=1 # Incrementa o j de 1 em 1
  i+=1 # Incrementa o i de 1 em 1

for resp in resposta: # Percorre o vetor de respostas
  print(" ".join(resp)) # Tranforma um vetor assim ['1','2','3'] para 1 2 3
