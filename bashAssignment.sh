mkdir sample
cd sample
touch sample.txt
echo “Hi! This is just a sample text file created using a shell script.”>sample.txt
cat sample.txt
grep -o ‘t’ sample.txt | wc -l
chmod 7 sample.txt
echo “Hi! This is just another sample text added to the file.”>>sample.txt
chmod 4 sample.txt
cp sample.txt sample2.txt

echo “Lorem Ipsum”>sample2.txt
head -50 sample2.txt
tail -50 sample2.txt
touch prog1.txt prog2.txt program.txt code.txt info.txt
ls -d prog*
echo “Lorem Ipsum”>a.txt
echo "DEQODE">b.txt
diff -w a.txt b.txt 
mkdir -p ./hello/world
cd ~
ls -a
echo “export COOLSERVER='Cherry'”>>.profile
printenv 